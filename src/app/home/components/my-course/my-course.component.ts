import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.scss'],
})
export class MyCourseComponent {
  public studentId: string;
  public courses: any[];
  constructor(private courseService: CourseService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMyCourse();
  }
  private getMyCourse(): void {
    this.studentId = window.localStorage.getItem('studentId') ?? '';
    console.log("studentId: ", this.studentId);

    this.courseService.getCourseByStudentId(this.studentId).subscribe((res) => {
      console.log('response: ', res);
      this.courses = res;
    });
  }
}
