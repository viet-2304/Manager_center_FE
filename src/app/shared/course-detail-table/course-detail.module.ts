import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PipeModule } from '../pipes/pipe.module';
import { CourseDetailTableComponent } from './course-detail-table.component';

@NgModule({
  imports: [ButtonModule, TableModule, PipeModule, CommonModule],
  exports: [CourseDetailTableComponent],
  declarations: [CourseDetailTableComponent],
  providers: [],
})
export class CourseDetailTableModule {}
