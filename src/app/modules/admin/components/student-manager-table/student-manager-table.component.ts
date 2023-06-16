import { ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrentUser } from 'src/app/authorization/models/Login.model';
import { StudentModel } from 'src/app/home/services/user.model';
import { AdminService } from '../../service/admin.service';
import { StatePipe } from '../../pipes/state.pipe';
@Component({
  selector: 'app-student-manager-table',
  templateUrl: './student-manager-table.component.html',
  styleUrls: ['./student-manager-table.component.scss'],
})
export class StudentManagerTableComponent {
  public students: StudentModel[];
  public visible: boolean;
  private currentAccountState: boolean;
  public currentEmail = window.localStorage.getItem('email') ?? '';
  constructor(
    private adminService: AdminService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllStudent();
    this.getCurrentUser();
  }
  private getAllStudent(): void {
    this.adminService.getAllStudent().subscribe((res) => {
      this.students = res;
      console.log('students: ', this.students);
    });
  }

  private getCurrentUser(): void {
    // this.store.select('currentUser').subscribe((res) => {
    //   console.log('current user: ', res);
    // });
  }

  public changeActive(state: boolean, email: string): void {
    this.visible = true;
    this.currentAccountState = state;
    this.currentEmail = email;
  }

  public removeStudent(): void {
    this.adminService
      .updateUserState(this.currentEmail, this.currentAccountState)
      .subscribe({
        next: () => {
          this.getAllStudent();
          this.cdr.detectChanges();
        },
        error: () => {
          this.getAllStudent();
          this.cdr.detectChanges();
        },
      });
    this.visible = false;
  }
}
