import { Component, Input } from '@angular/core';
import { CourseInfors } from '../../models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {

  @Input() courseInfor: CourseInfors;
 @Input() imageForCourse: string;
}
