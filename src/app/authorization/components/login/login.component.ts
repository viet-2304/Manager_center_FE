import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // providers: [HttpClientModule]
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: ActivatedRoute
  ) {}
  loginForm = new FormGroup({
    email: new FormControl('admin'),
    password: new FormControl('admin'),
  });

  public login(): void {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    console.log(this.loginForm.controls.email.value);
    console.log(this.loginForm.controls.password.value);

    this.loginService.login(email, password).subscribe((res) => {
      if (res.token) {
        console.log('response: ', res);
        window.localStorage.setItem('token', res.token);

        window.location.href = '/home';
      }
    });
  }
}
