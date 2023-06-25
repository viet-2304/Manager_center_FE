import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { EditAttendanceTableComponent } from './edit-attendance-table.component';


@NgModule({
  imports: [TableModule, CommonModule, FormsModule],
  exports: [EditAttendanceTableComponent],
  declarations: [EditAttendanceTableComponent],
  providers: [],
})
export class EditAttendanceTableModule { }
