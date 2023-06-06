import { NgModule } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeRouting } from './home.routing';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { TeacherItemComponent } from './components/teacher-item/teacher-item.component';
import { CommonModule } from '@angular/common';
import { TeacherSessionComponent } from './components/teacher-session/teacher-session.component';
import { CourseSessionComponent } from './components/course-session/course-session.component';
import { CourseItemComponent } from './components/course-item/course-item.component';

@NgModule({
  imports: [HomeRouting,CommonModule],
  exports: [],
  declarations: [HomePageComponent, HeaderComponent, FooterComponent, TeacherItemComponent, TeacherSessionComponent, CourseSessionComponent, CourseItemComponent],
  providers: [],
})
export class HomeModule {}
