import { ChangeDetectorRef, Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CourseService } from 'src/app/home/services/course.service';
import { StudentAttendanceModel } from '../models/student-attendance.model';

@Component({
  selector: 'app-attendace-student',
  templateUrl: './attendace-student.component.html',
  styleUrls: ['./attendace-student.component.scss'],
})
export class AttendaceStudentComponent {
  public listStudentAttendance: StudentAttendanceModel[] = [];
  public isChange = false;
public courseId: string;
  constructor(
    private courseService: CourseService,
    public config: DynamicDialogConfig,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAttendance();
  }

  public getAttendance(): void {
    this.courseId= this.config.data.courseId;
    this.courseService
      .getAttendance(this.courseId)
      .subscribe((res) => {
        this.listStudentAttendance = res;
      });
  }

  public attendanceChange(): void {
    this.isChange = true;
    this.cdr.detectChanges();
  }

  public getData(event: any): void {
    this.isChange = false;
    this.cdr.detectChanges();
  }

}
