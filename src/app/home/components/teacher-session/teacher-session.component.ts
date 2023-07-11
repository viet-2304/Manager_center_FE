import { ChangeDetectorRef, Component } from '@angular/core';
import { AdminService } from 'src/app/modules/admin/service/admin.service';
import { TeacherInfo, TeacherResponse } from '../../models/teacher.model';

@Component({
  selector: 'app-teacher-session',
  templateUrl: './teacher-session.component.html',
  styleUrls: ['./teacher-session.component.scss'],
})
export class TeacherSessionComponent {
  public teacher: TeacherResponse[];
  constructor(
    private adminService: AdminService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getTeacher();
  }
  private getTeacher(): void {
    this.adminService.getAllTeacher().subscribe((res) => {
      console.log("teacher: ", res);

      this.teacher = res?.splice(0, 5);
      this.cdr.detectChanges();
    });
  }
  // public teacherInFors: TeacherInfo[] = [
  //   {
  //     name: 'Teacher A',
  //     description: 'who teach english',
  //     imageUrl:
  //   },
  //   {
  //     name: 'Teacher A',
  //     description: 'who teach english',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  //   },
  //   {
  //     name: 'Teacher A',
  //     description: 'who teach english',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  //   },
  //   {
  //     name: 'Teacher A',
  //     description: 'who teach english',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  //   },
  //   {
  //     name: 'Teacher A',
  //     description: 'who teach english',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  //   },
  //   {
  //     name: 'Teacher A',
  //     description: 'who teach english',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  //   },
  //   {
  //     name: 'Teacher A',
  //     description: 'who teach english',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  //   },
  // ];
}
