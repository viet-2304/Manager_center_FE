import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { CourseService } from 'src/app/home/services/course.service';
import { CourseDetailModel } from 'src/app/modules/courses/models/course.model';
import { AttendaceStudentComponent } from '../attendace-student/attendace-student.component';

@Component({
  selector: 'app-course-detail-table',
  templateUrl: './course-detail-table.component.html',
  styleUrls: ['./course-detail-table.component.scss'],
  providers: [DialogService, MessageService]

})
export class CourseDetailTableComponent {
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

  public showListStudentAttendance(courseId: string): void {
    this.dialogService.open(AttendaceStudentComponent, {
      data: {
        courseId: courseId
      },
      header: "Danh sách học sinh điểm danh",
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
