import { NgModule } from '@angular/core';

import { HomeRouting } from './home.routing';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { TeacherItemComponent } from './components/teacher-item/teacher-item.component';
import { CommonModule } from '@angular/common';
import { TeacherSessionComponent } from './components/teacher-session/teacher-session.component';
import { CourseSessionComponent } from './components/course-session/course-session.component';
import { CategorySessionComponent } from './components/category-session/category-session.component';
import { CourseItemsModule } from '../shared/course-items/course-item.module';
import { CarouselModule } from 'primeng/carousel';
import { MyCourseComponent } from './components/my-course/my-course.component';
import { AllTeacherComponent } from './components/all-teacher/all-teacher.component';
@NgModule({
  imports: [HomeRouting, CommonModule, CourseItemsModule, CarouselModule],
  exports: [],
  declarations: [
    HomePageComponent,
    TeacherItemComponent,
    TeacherSessionComponent,
    CourseSessionComponent,
    CategorySessionComponent,
    MyCourseComponent,
    AllTeacherComponent,
  ],
  providers: [],
})
export class HomeModule {}
