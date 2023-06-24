import { Component, Input } from '@angular/core';
import { TeacherInfo, TeacherResponse } from '../../models/teacher.model';

@Component({
  selector: 'app-teacher-item',
  templateUrl: './teacher-item.component.html',
  styleUrls: ['./teacher-item.component.scss']
})
export class TeacherItemComponent {

  @Input() teacherInfor:TeacherResponse;

}
