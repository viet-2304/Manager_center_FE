import { ChangeDetectorRef, Component } from '@angular/core';
import { CourseResponse } from 'src/app/home/models/course.model';
import { CourseService } from 'src/app/home/services/course.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss'],
})
export class SalaryComponent {
  public course: CourseResponse[];
  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCourseByTeacherId();
  }
  private getCourseByTeacherId(): void {
    this.courseService.getCourseByTeacherId('2').subscribe((res) => {
      this.course = res;
      console.log('course: ', this.course);

      this.cdr.detectChanges();
    });
  }
}
