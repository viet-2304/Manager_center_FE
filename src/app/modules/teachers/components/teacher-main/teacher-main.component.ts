import { ChangeDetectorRef, Component } from '@angular/core';
import { ShareDataService } from 'src/app/modules/admin/service/shared-data.service';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teacher-main',
  templateUrl: './teacher-main.component.html',
  styleUrls: ['./teacher-main.component.scss'],
})
export class TeacherMainComponent {
  public sidebarSelected: string = 'course';
  public teacherEmail: string;
  public teacherId: string;
  constructor(
    private sharedDataService: ShareDataService,
    private teacherService: TeacherService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMessage();
    this.getCurrentTeacher();
  }
  private getMessage(): void {
    this.sharedDataService.getMessage().subscribe((res) => {
      this.sidebarSelected = res + '';
    });
  }

  private getCurrentTeacher(): void {
    this.teacherEmail = window.localStorage.getItem('email') ?? '';
    if (this.teacherEmail) {
      this.teacherService
        .getCurrentTeacher(this.teacherEmail)
        .subscribe((res) => {
          console.log('current eacerh: ', res);
          this.teacherId = res.teacherId;
          this.cdr.detectChanges();
        });
    }
  }
}
