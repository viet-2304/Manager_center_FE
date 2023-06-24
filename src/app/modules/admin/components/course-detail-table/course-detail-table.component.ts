import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CourseService } from 'src/app/home/services/course.service';
import { CourseDetailModel } from 'src/app/modules/courses/models/course.model';

@Component({
  selector: 'app-course-detail-table',
  templateUrl: './course-detail-table.component.html',
  styleUrls: ['./course-detail-table.component.scss'],
})
export class CourseDetailTableComponent {
  @Input() courseId: string;
  public courseDetail: CourseDetailModel[];
  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCourseDetail();
  }

  private getCourseDetail(): void {
    this.courseService.getCourseDetail(this.courseId).subscribe((res) => {
      this.courseDetail = res;
      this.cdr.detectChanges();
      console.log('course detail : ', res);
    });
  }
}
