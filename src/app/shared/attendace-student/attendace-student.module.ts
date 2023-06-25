import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { EditAttendanceTableModule } from '../edit-attendance-table/edit-attendance-table.module';
import { AttendaceStudentComponent } from './attendace-student.component';


@NgModule({
  imports: [TableModule, CommonModule, EditAttendanceTableModule],
  exports: [AttendaceStudentComponent],
  declarations: [AttendaceStudentComponent],
  providers: [],
})
export class AttendanceModule { }
