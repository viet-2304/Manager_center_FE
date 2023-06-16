import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { CurrentUser } from '../../models/Login.model';
import { LoginService } from '../../service/login.service';
import { SetCurrentUser } from '../../service/user.action';
import { UserState } from '../../service/user.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent {
  public loginForm: any;

  constructor(
    private toastService: ToastrService,
    private loginService: LoginService,
    private cdf: ChangeDetectorRef,
    private store: Store
  ) {}

  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  // public isFail = true;

  public login(): void {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    this.loginService.login(email, password).subscribe({
      next: (res) => {
        window.localStorage.setItem('authToken', res.token);
        window.localStorage.setItem('email', res.userDto.email);
        window.localStorage.setItem('role', res.userDto.roleId);
        this.store.dispatch(new SetCurrentUser(res.userDto));

        if (res.userDto.roleId === 'admin') {
          window.location.href = '/admin';
        } else {
          console.log(this.store.selectSnapshot(UserState.getCurrentUser));
          window.location.href = '/home';
        }
      },
      error: () => {
        this.toastService.error('email or password incorrect');

        this.cdf.detectChanges();
      },
    });
  }

  public register(): void {
    window.location.replace('auth/register');
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
