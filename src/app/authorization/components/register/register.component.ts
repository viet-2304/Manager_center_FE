import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentRegisterModel } from '../../models/Register.model';
import { LoginService } from '../../service/login.service';
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerForm: any;

  constructor(private registerService: RegisterService) {}
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
      phoneContact: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      generate: new FormControl('', [Validators.required]),
    });
  }

  public register(): void {
    this.registerService.register(this.getStudentRegister()).subscribe({
      next: (res) => {
        window.location.replace("/home")
      },
      error: (err) => {
        console.log('error: ', err);
      },
    });
  }

  private getStudentRegister(): StudentRegisterModel {
    var student: StudentRegisterModel = new StudentRegisterModel();
    student.email = this.registerForm.controls.email.value;
    student.address = this.registerForm.controls.address.value;
    student.dateOfBirth = '';
    student.fatherName = this.registerForm.controls.fatherName.value;
    student.fatherPhoneNumber = this.registerForm.controls.phoneContact.value;
    student.fullName = this.registerForm.controls.name.value;
    if (this.registerForm.controls.generate.value === 'Female') {
      student.gender = '0';
    } else {
      student.gender = '1';
    }

    student.motherName = this.registerForm.controls.motherName.value;
    student.motherPhoneNumber = this.registerForm.controls.phoneContact.value;
    student.password = this.registerForm.controls.password.value;
    student.phoneNumber = this.registerForm.controls.phoneNumber.value;
    return student;
  }
  get name() {
    return this.registerForm.get('name');
  }
  get motherName() {
    return this.registerForm.get('motherName');
  }
  get fatherName() {
    return this.registerForm.get('fatherName');
  }
  get address() {
    return this.registerForm.get('address');
  }
  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get generate() {
    return this.registerForm.get('generate');
  }
  get phoneContact() {
    return this.registerForm.get('phoneContact');
  }
  get password() {
    return this.registerForm.get('password');
  }
}
