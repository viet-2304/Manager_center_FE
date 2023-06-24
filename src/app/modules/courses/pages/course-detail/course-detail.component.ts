import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CourseResponse } from 'src/app/home/models/course.model';
import { CourseService } from 'src/app/home/services/course.service';
import { CourseModule } from '../../course.module';
import { CourseDetailModel } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent {
  public courseDetail: CourseDetailModel;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCourseDetail();
  }

  private getCourseDetail(): void {
    let courseId: string = '';
    this.route.queryParams.subscribe((param: Params) => {
      courseId = param['id'];
    });
    this.courseService.getCourseDetail(courseId).subscribe((res) => {
      // this.courseDetail = res;
      console.log('course detail: ', res);
    });
  }
}
