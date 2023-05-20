import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  public login(): void {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    console.log(this.loginForm.controls.email.value);
    console.log(this.loginForm.controls.password.value);
    // console.log(em);

    this.loginService.login(email, password);
  }
}
