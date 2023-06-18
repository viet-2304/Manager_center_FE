import { ChangeDetectorRef, Component } from '@angular/core';
import { CourseResponse } from 'src/app/home/models/course.model';
import { CourseService } from 'src/app/home/services/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent {
  public courses: CourseResponse[];
  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllCourse();
  }

  public getAllCourse(): void {
    this.courseService.getAllCourse().subscribe((res) => {
      this.courses = res;
      this.cdr.detectChanges();
      console.log('course response: ', res);
    });
  }
}
