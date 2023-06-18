import { NgModule } from '@angular/core';

import { CoursePageComponent } from './pages/course-page/course-page.component';
import { PaginatorModule } from 'primeng/paginator';
import { CourseItemsModule } from 'src/app/shared/course-items/course-item.module';
import { CourseRouting } from './course.routing';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [PaginatorModule, CourseItemsModule, CourseRouting, CommonModule],
  exports: [],
  declarations: [CoursePageComponent],
  providers: [],
})
export class CourseModule { }
