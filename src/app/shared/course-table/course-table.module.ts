import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CourseDetailTableModule } from '../course-detail-table/course-detail.module';
import { CourseTableComponent } from './course-table.component';


@NgModule({
  imports: [ButtonModule, CommonModule, TableModule, CourseDetailTableModule],
  exports: [CourseTableComponent],
  declarations: [CourseTableComponent],
  providers: [],
})
export class CourseTableModule { }
