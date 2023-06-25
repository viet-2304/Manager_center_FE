import { Component, Input } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CourseService } from 'src/app/home/services/course.service';
import { StudentModel } from 'src/app/home/services/user.model';

@Component({
  selector: 'app-list-student-in-course',
  templateUrl: './list-student-in-course.component.html',
  styleUrls: ['./list-student-in-course.component.scss']
})
export class ListStudentInCourseComponent {

  public listStudent: StudentModel[];

  constructor(private courseService: CourseService,  public config: DynamicDialogConfig) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllStudentInCourse(this.config.data.courseId);
    console.log("data: ", this.config.data.courseId);


  }

  public getAllStudentInCourse(courseId: string): void{
    this.courseService.getStudentInCourse(courseId).subscribe(res => {
      this.listStudent = res;
      console.log("list student: ", res);

    })
  }
}
