import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CourseService } from 'src/app/home/services/course.service';
import { CourseDetailModel } from 'src/app/modules/courses/models/course.model';
import { AttendaceStudentComponent } from 'src/app/shared/attendace-student/attendace-student.component';

@Component({
  selector: 'app-salary-detail',
  templateUrl: './salary-detail.component.html',
  styleUrls: ['./salary-detail.component.scss']
})
export class SalaryDetailComponent {
  @Input() courseId: string;
  public courseDetail: CourseDetailModel[];
  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef,
    private dialogService: DialogService

  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCourseDetail();
  }

  public showListStudentAttendance(courseId: string, date: string): void {
    this.dialogService.open(AttendaceStudentComponent, {
      data: {
        courseId: courseId,
        date: date
      },
      header: `Danh sách học sinh ngày  ${date}`,
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,

    })
  }

  private getCourseDetail(): void {
    this.courseService.getCourseDetail(this.courseId).subscribe((res) => {
      this.courseDetail = res;
      this.cdr.detectChanges();
      console.log('course detail : ', res);
    });
  }
}
