import { ChangeDetectorRef, Component } from '@angular/core';
import { CourseResponse } from 'src/app/home/models/course.model';
import { TeacherResponse } from 'src/app/home/models/teacher.model';
import { CourseService } from 'src/app/home/services/course.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-course-manager-table',
  templateUrl: './course-manager-table.component.html',
  styleUrls: ['./course-manager-table.component.scss'],
})
export class CourseManagerTableComponent {
  public course: CourseResponse[];
  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCourse();
  }
  private getCourse(): void {
    this.courseService.getAllCourse().subscribe((res) => {
      this.course = res;
      console.log('course: ', this.course);

      this.cdr.detectChanges();
    });
  }
}
