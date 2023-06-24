import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {
  CourseResponse,
  CourseStudentDto,
} from 'src/app/home/models/course.model';
import { CourseService } from 'src/app/home/services/course.service';

@Component({
  selector: 'app-course-items',
  templateUrl: './course-items.component.html',
  styleUrls: ['./course-items.component.scss'],
})
export class CourseItemsComponent {
  public visible = false;
  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}
  @Input() course: CourseResponse;
  private data: CourseStudentDto = new CourseStudentDto();

  public openCourseDetail(id: string): void {
    this.router.navigate(['/course/detail'],{ queryParams: { id: id }});
  }

  public register(): void {
    this.visible = true;
    // this.cdr.detectChanges
  }
  public Oke(courseId: string): void {
    this.data.studentId = '402881e988951f580188951fb6820001';
    this.data.courseId = courseId;
    this.courseService.addStudentToCourse(this.data).subscribe({
      next: () => {
        this.visible = false;
        window.location.reload();
      },
      error: () => {
        this.visible = false;
        window.location.reload();
      },
    });
  }
}
