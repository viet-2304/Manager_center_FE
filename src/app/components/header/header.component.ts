import { ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { currentStudent } from 'src/app/home/models/user.model';
import { StudentService } from 'src/app/home/services/student.service';
import { setCurrentStudent } from 'src/app/home/services/student.action';
import { UserInfo } from 'src/app/authorization/models/Login.model';

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
    private store: Store<{ currentUser: UserInfo }>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(window.localStorage.getItem('email'));
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
            this.store.dispatch(setCurrentStudent(res));
            console.log('res: ', res);
            this.isLogin = true;
            this.cdr.detectChanges();
          },
          error: () => {},
        });
    }
  }

  public redirect(url: string): void {
    window.location.replace(url);
  }
}
