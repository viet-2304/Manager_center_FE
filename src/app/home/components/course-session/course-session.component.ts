import { ChangeDetectorRef, Component } from '@angular/core';
import { CourseModule } from 'src/app/modules/courses/course.module';
import { CourseResponse } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-session',
  templateUrl: './course-session.component.html',
  styleUrls: ['./course-session.component.scss'],
})
export class CourseSessionComponent {
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
      console.log("course: ", this.courses);

      this.courses = res.slice(0,3);
      this.cdr.detectChanges();
    });
  }


}
