import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CourseResponse } from 'src/app/home/models/course.model';
import { CourseService } from 'src/app/home/services/course.service';
import { CourseModule } from '../../course.module';
import { CourseDetailModel } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],

  providers: [CurrencyPipe],
})
export class CourseDetailComponent {
  public courseDetail: CourseResponse;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private currencyPipe: CurrencyPipe
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
    this.courseService.getCourseById(courseId).subscribe((res) => {
      this.courseDetail = res;
      this.cdr.detectChanges();
      console.log('course detail: ', res);
    });
  }
}
