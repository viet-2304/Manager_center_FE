import { ChangeDetectorRef, Component } from '@angular/core';
import { currentStudent } from 'src/app/home/models/user.model';
import { StudentService } from 'src/app/home/services/student.service';
import { CurrentUser } from 'src/app/authorization/models/Login.model';
import { Store } from '@ngxs/store';
import { UserState } from 'src/app/authorization/service/user.state';
import { LogoutService } from 'src/app/authorization/service/logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isLogin = false;
  public isShow = true;
  public role: string | null;
  constructor(
    private studentService: StudentService,
    private store: Store,
    private cdr: ChangeDetectorRef,
    private logoutService: LogoutService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(window.localStorage.getItem('email'));
    this.getCurrentUser();
  }

  public getCurrentUser(): void {
    this.role = window.localStorage.getItem('role');
    if (this.role === 'admin') {
      this.isShow = false;
      this.cdr.detectChanges();
    } else {
      this.studentService
        .getCurrentStudent(window.localStorage.getItem('email') ?? '')
        .subscribe({
          next: (res) => {
            if (res) {
              this.isLogin = true;
              this.cdr.detectChanges();
            }
          },
          error: () => {},
        });
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
