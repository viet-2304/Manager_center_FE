import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CourseItemsComponent } from './course-items.component';


@NgModule({
  imports: [
    DialogModule,
    CommonModule,
    ButtonModule
  ],
  exports: [CourseItemsComponent],
  declarations: [CourseItemsComponent],
  providers: [],
})
export class CourseItemsModule { }
