import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { EditAttendanceTableComponent } from './edit-attendance-table.component';


@NgModule({
  imports: [TableModule, CommonModule, FormsModule, ToastModule, ],
  exports: [EditAttendanceTableComponent],
  declarations: [EditAttendanceTableComponent],
  providers: [],
})
export class EditAttendanceTableModule { }
