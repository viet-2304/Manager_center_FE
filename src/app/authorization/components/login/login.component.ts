import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { LoginService } from '../../service/login.service';

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
    private cdf: ChangeDetectorRef
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
    console.log(this.loginForm.controls.email.value);
    console.log(this.loginForm.controls.password.value);

    this.loginService.login(email, password).subscribe({
      next: (res) => {
        window.localStorage.setItem('token', res.token);

        window.location.href = '/home';
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
