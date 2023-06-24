import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';

export const routes: Routes = [
  { path: '', component: CoursePageComponent },
  { path: 'detail', component: CourseDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRouting {}
