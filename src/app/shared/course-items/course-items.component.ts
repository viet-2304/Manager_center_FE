import { Component, Input } from '@angular/core';
import { CourseResponse } from 'src/app/home/models/course.model';

@Component({
  selector: 'app-course-items',
  templateUrl: './course-items.component.html',
  styleUrls: ['./course-items.component.scss']
})
export class CourseItemsComponent {
  @Input() course: CourseResponse;


  public openCourseDetail(id: string): void {

  }
}
