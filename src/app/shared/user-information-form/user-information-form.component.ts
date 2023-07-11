import { ChangeDetectorRef, Component } from '@angular/core';
import { AdminService } from 'src/app/modules/admin/service/admin.service';
import { StudentService } from 'src/app/home/services/student.service';
import { StudentModel } from '../models/student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-information-form',
  templateUrl: './user-information-form.component.html',
  styleUrls: ['./user-information-form.component.scss'],
})
export class UserInformationFormComponent {
  public currentEmail = window.localStorage.getItem('email') ?? '';
  public student: StudentModel;
  public isDisable = true;
  public userInForForm: any;
  constructor(private studentService: StudentService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCurrentUser();
  }

  public getCurrentUser(): void {
    this.studentService
      .getCurrentStudent(this.currentEmail)
      .subscribe((res) => {
        this.student = res;
        console.log('student: ', res);
      });
  }

  private initForm(): void {
    this.userInForForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      motherName: new FormControl('', [Validators.required]),
      fatherName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneContact: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      generate: new FormControl('', [Validators.required]),
    })
  }

  public editUserInfo(): void {
    this.isDisable = false;
    this.cdr.detectChanges();
  }

  public submit(): void {

  }
}
