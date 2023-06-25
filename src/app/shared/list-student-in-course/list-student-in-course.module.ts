import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PipeModule } from '../pipes/pipe.module';
import { ListStudentInCourseComponent } from './list-student-in-course.component';


@NgModule({
  imports: [TableModule, PipeModule],
  exports: [ListStudentInCourseComponent],
  declarations: [ListStudentInCourseComponent],
  providers: [],
})
export class ListStudentInCourseModule { }
