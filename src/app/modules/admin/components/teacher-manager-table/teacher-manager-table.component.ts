import { ChangeDetectorRef, Component } from '@angular/core';
import { TeacherResponse } from 'src/app/home/models/teacher.model';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-teacher-manager-table',
  templateUrl: './teacher-manager-table.component.html',
  styleUrls: ['./teacher-manager-table.component.scss'],
})
export class TeacherManagerTableComponent {
  public teachers: TeacherResponse[];
  public visible: boolean;
  private currentAccountState: boolean;
  public currentEmail: string;
  constructor(
    private adminService: AdminService,
    private cdr: ChangeDetectorRef
    ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllTeacher();
  }
  private getAllTeacher(): void {
    this.adminService.getAllTeacher().subscribe((res) => {
      this.teachers = res;
    });
  }

  public changeActive(state: boolean, email: string): void {
    this.visible = true;
    this.currentAccountState = state;
    this.currentEmail = email;
  }

  public removeTeacher(): void {
    this.adminService
      .updateUserState(this.currentEmail, this.currentAccountState)
      .subscribe({
        next: () => {
          this.getAllTeacher();
          this.cdr.detectChanges();
        },
        error: () => {
          this.getAllTeacher();
          this.cdr.detectChanges();
        },
      });
    this.visible = false;
  }
}
