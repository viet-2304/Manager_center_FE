import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherPageComponent } from './pages/teacher-page/teacher-page.component';

export const routes: Routes = [{
  path: '',
  component: TeacherPageComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRouting {}
