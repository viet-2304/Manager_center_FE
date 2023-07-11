import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CourseResponse } from 'src/app/home/models/course.model';
import { TeacherRegister } from 'src/app/home/models/teacher.model';
import { CourseService } from 'src/app/home/services/course.service';
import { TeacherService } from 'src/app/modules/teachers/services/teacher.service';
import { SubjectModel } from '../models/subject.model';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-register-teacher-form',
  templateUrl: './register-teacher-form.component.html',
  styleUrls: ['./register-teacher-form.component.scss'],
  providers: [MessageService],
})
export class RegisterTeacherFormComponent {
  public registerTeacherForm: any;
  public subjectData: SubjectModel[];
  public selectedSubject: string;
  public teacherRegister: TeacherRegister = new TeacherRegister;
  constructor(
    private messageService: MessageService,
    private subjectService: SubjectService,
    private cdr: ChangeDetectorRef,
    private teacherService: TeacherService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initForm();
    this.getAllSubject();
  }
  public registerTeacher(): void {
    console.log('form data: ', this.registerTeacherForm.controls);
    this.getTeacherRegister();
    console.log("teacher register: ", this.teacherRegister );
    this.teacherService.createNewTeacher(this.teacherRegister).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Taọ thành công',
          detail: 'Tài khoản giáo viên đã được được tạo',
        });
      },
      error: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Taọ thành công',
          detail: 'Tài khoản giáo viên đã được được tạo',
        });
      }
    })


  }

  private getAllSubject(): void {
    this.subjectService.getAllSubject().subscribe((res) => {
      console.log('subject: ', res);
      this.subjectData = res;
      this.cdr.detectChanges();
    });
  }

  private getTeacherRegister(): void {
    this.teacherRegister.address = this.registerTeacherForm.controls.address.value;
    this.teacherRegister.dateOfBirth = this.registerTeacherForm.controls.dateOfBirth.value;
    this.teacherRegister.email = this.registerTeacherForm.controls.email.value;
    this.teacherRegister.fullName = this.registerTeacherForm.controls.fullName.value;
    this.teacherRegister.gender = this.registerTeacherForm.controls.address.gender === "Male" ? "1" : "0";
    this.teacherRegister.password = this.registerTeacherForm.controls.password.value;
    this.teacherRegister.phoneNumber = this.registerTeacherForm.controls.phoneNumber.value;
    this.teacherRegister.subjectId = this.registerTeacherForm.controls.subjectId.value.id;
    this.teacherRegister.password = this.registerTeacherForm.controls.password.value;
    this.teacherRegister.salaryPercent = this.registerTeacherForm.controls.salary.value;
  }

  private initForm(): void {
    this.registerTeacherForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      subjectId: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
    });
  }
}
