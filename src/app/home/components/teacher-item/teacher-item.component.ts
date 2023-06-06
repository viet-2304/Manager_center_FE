import { Component, Input } from '@angular/core';
import { TeacherInfo } from '../../models/teacher.model';

@Component({
  selector: 'app-teacher-item',
  templateUrl: './teacher-item.component.html',
  styleUrls: ['./teacher-item.component.scss']
})
export class TeacherItemComponent {

  @Input() teacherInfor:TeacherInfo;

}
