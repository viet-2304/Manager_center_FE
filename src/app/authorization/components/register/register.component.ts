import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerForm: any;

  constructor() {}
  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.buildForm();
  }
  public buildForm(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      motherName: new FormControl('', [Validators.required]),
      fatherName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      generate: new FormControl('', [Validators.required]),
    });
  }

  public register(): void {
    console.log('hahaha: ', this.registerForm.controls);
  }
  get name() {
    return this.registerForm.get('email');
  }
  get motherName() {
    return this.registerForm.get('email');
  }
  get fatherName() {
    return this.registerForm.get('email');
  }
  get address() {
    return this.registerForm.get('email');
  }
  get phoneNumber() {
    return this.registerForm.get('email');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get generate() {
    return this.registerForm.get('email');
  }
}
