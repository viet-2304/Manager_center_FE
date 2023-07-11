import { ChangeDetectorRef, Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { RoomResponse } from 'src/app/home/models/room.model';
import { TeacherResponse } from 'src/app/home/models/teacher.model';
import { CourseService } from 'src/app/home/services/course.service';
import { AdminService } from 'src/app/modules/admin/service/admin.service';
import {
  CourseDetailModel,
  learningSession,
} from 'src/app/modules/courses/models/course.model';
import { TeacherService } from 'src/app/modules/teachers/services/teacher.service';
import {
  CourseDetail,
  CourseRegister,
  TemptToShow,
} from '../models/shared.model';
import { SharedService } from '../services/shared.service';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-create-course-modal',
  templateUrl: './create-course-modal.component.html',
  styleUrls: ['./create-course-modal.component.scss'],
  providers: [MessageService]
})
export class CreateCourseModalComponent {
  public listTeacher: TeacherResponse[];
  public roomResponse: TemptToShow[] = [];
  public learningSession: TemptToShow[] = [];
  public teacherSelected: any;
  public learningSessionSelected1: string;
  public learningSessionSelected2: string;
  public roomSelected1: string;
  public roomSelected2: string;
  public createCourseForm: any;
  public subject: string;
  public courseDetail: CourseDetail[];
  public courseRegister: CourseRegister = new CourseRegister();
  public listSubject: any[];
  public subjectSelected: any;
  @Input() courseSelected: any;
  constructor(
    private adminService: AdminService,
    private cdr: ChangeDetectorRef,
    private sharedService: SharedService,
    private courseService: CourseService,
    private messageService: MessageService,
    private subjectService: SubjectService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initForm();
    this.getAllLearningSession();
    this.getAllRoom();
    this.getAllTeacher();
    this.getAllSubject();
    console.log('all room: ', this.roomResponse);
  }

  public createNewCourse(): void {
    this.getCourseFromForm();
  }

  private getCourseFromForm(): void {
    this.courseRegister.courseName =
      this.createCourseForm.controls.courseName.value;
    this.courseRegister.fromDate =
      this.createCourseForm.controls.fromDate.value;
    this.courseRegister.toDate = this.createCourseForm.controls.toDate.value;
    this.courseRegister.teacherId =
      this.createCourseForm.controls.teacherId.value.teacherId;
    this.courseRegister.maxQuantity =
      this.createCourseForm.controls.maxQuantity.value;
    this.courseRegister.price = this.createCourseForm.controls.price.value;
    this.courseRegister.courseDetailDtoList = this.getCourseDetail();
    console.log('course Register :', this.courseRegister);
    this.courseService.createCourse(this.courseRegister).subscribe((res) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Taọ thành công',
        detail: 'Khóa học mới đã được tạo thành công',
      });
    });
  }

  private getCourseDetail(): CourseDetail[] {
    const courseDetailTempt1: CourseDetail = new CourseDetail();
    const courseDetailTempt2: CourseDetail = new CourseDetail();
    courseDetailTempt1.learnDate = this.createCourseForm.controls.date1.value;
    courseDetailTempt1.roomId = this.createCourseForm.controls.room1.value.id;
    courseDetailTempt1.learningSessionId =
      this.createCourseForm.controls.learningSession1.value.id;
    courseDetailTempt2.learnDate = this.createCourseForm.controls.date2.value;
    courseDetailTempt2.roomId = this.createCourseForm.controls.room2.value.id;
    courseDetailTempt2.learningSessionId =
      this.createCourseForm.controls.learningSession2.value.id;
    console.log('ahhahhaha: ', courseDetailTempt1);
    console.log('ahhahhaha: ', courseDetailTempt2);
    return [{ ...courseDetailTempt1 }, { ...courseDetailTempt2 }];
  }
  private initForm(): void {
    this.createCourseForm = new FormGroup({
      courseName: new FormControl('', [Validators.required]),
      maxQuantity: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      fromDate: new FormControl('', [Validators.required]),
      toDate: new FormControl('', [Validators.required]),
      teacherId: new FormControl('', [Validators.required]),
      date1: new FormControl('', [Validators.required]),
      room1: new FormControl('', [Validators.required]),
      learningSession1: new FormControl('', [Validators.required]),
      date2: new FormControl('', [Validators.required]),
      room2: new FormControl('', [Validators.required]),
      learningSession2: new FormControl('', [Validators.required]),
    });
  }

  private convertData(): void {}
  private getAllTeacher(): void {
    this.adminService.getAllTeacher().subscribe((res) => {
      this.listTeacher = res;
    });
  }

  private getAllRoom(): void {
    this.sharedService.getAllRoom().subscribe((res) => {
      res.forEach((item) => {
        this.roomResponse.push({
          id: item.roomId,
          name: 'Tầng ' + item.floorId + 'phòng ' + item.roomName,
        });
      });
      this.cdr.detectChanges();
    });
  }

  private getAllLearningSession(): void {
    this.sharedService.getAllLearningSession().subscribe((res) => {
      res.forEach((item) => {
        this.learningSession.push({
          id: item.id,
          name: item.fromTime + ' - ' + item.toTime,
        });
      });
      this.cdr.detectChanges();
    });
  }

  private getAllSubject(): void {
    this.subjectService.getAllSubject().subscribe(res => {this.listSubject = res})
  }
}
