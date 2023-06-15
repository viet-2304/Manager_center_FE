import { Component } from '@angular/core';
import { StudentModel } from 'src/app/home/services/user.model';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-student-manager-table',
  templateUrl: './student-manager-table.component.html',
  styleUrls: ['./student-manager-table.component.scss']
})
export class StudentManagerTableComponent {

  public students: StudentModel[];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllStudent();
  }
  private getAllStudent(): void {
    this.adminService.getAllStudent().subscribe((res) => {
      this.students = res;
      console.log('students: ', this.students);
    });
  }
}
