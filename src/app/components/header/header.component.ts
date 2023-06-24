import { ChangeDetectorRef, Component } from '@angular/core';
import { currentStudent } from 'src/app/home/models/user.model';
import { StudentService } from 'src/app/home/services/student.service';
import { CurrentUser } from 'src/app/authorization/models/Login.model';
import { Store } from '@ngxs/store';
import { UserState } from 'src/app/authorization/service/user.state';
import { LogoutService } from 'src/app/authorization/service/logout.service';
import { AdminService } from 'src/app/modules/admin/service/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isLogin = false;
  public isShow = true;
  public role: string | null;
  public studentEmail: string;

  public currentEmail = window.localStorage.getItem('email') ?? '';
  constructor(
    private studentService: StudentService,
    private store: Store,
    private cdr: ChangeDetectorRef,
    private logoutService: LogoutService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(window.localStorage.getItem('email'));
    this.getCurrentUser();
  }

  public getCurrentUser(): void {
    this.role = window.localStorage.getItem('role');
    let path = window.location.pathname;
    if (path === '/admin') {
      this.isShow = false;
    } else {
      this.isShow = true;
      if (this.role === 'admin') {
        this.adminService.getCurrentAdmin(this.currentEmail);
        this.cdr.detectChanges();
      } else {
        this.studentService.getCurrentStudent(this.currentEmail).subscribe({
          next: (res) => {
            if (res) {
              this.studentEmail = res.email;
              this.isLogin = true;
              this.cdr.detectChanges();
            }
          },
          error: () => {},
        });
      }
    }
  }

  public logout(): void {
    this.logoutService.logout();
    this.isLogin = false;
    this.cdr.detectChanges();
  }

  public redirect(url: string): void {
    window.location.replace(url);
  }
}
