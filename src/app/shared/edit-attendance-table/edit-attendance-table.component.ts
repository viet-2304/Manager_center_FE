import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CourseService } from 'src/app/home/services/course.service';
import { StudentModule } from 'src/app/modules/students/student.module';
import { AttendanceModule } from '../attendace-student/attendace-student.module';
import { StudentAttendanceModel } from '../models/student-attendance.model';
import { StudentModel } from '../models/student.model';

@Component({
  selector: 'app-edit-attendance-table',
  templateUrl: './edit-attendance-table.component.html',
  styleUrls: ['./edit-attendance-table.component.scss'],
})
export class EditAttendanceTableComponent {
  public listStudentAttendance: StudentModel[];
  @Input() courseId: string;
  @Output() detectCancel = new EventEmitter();
  public valueDescription: string;
  constructor(
    private cdr: ChangeDetectorRef,
    private courseService: CourseService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getStudentByCourseId();
  }
  public cancel(): void {
    // this.isChange = false;
    this.detectCancel.emit();
    // this.cdr.detectChanges();
  }

  public getStudentByCourseId(): void {
    this.courseService.getStudentInCourse(this.courseId).subscribe((res) => {
      this.listStudentAttendance = res;
      this.cdr.detectChanges();
    });
  }

  public submit(): void {}
}
