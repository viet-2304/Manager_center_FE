import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';

const appRouter = [
  {
    path: '',
    component: DefaultLayoutComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      ),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./modules/teachers/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: 'admin',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./modules/courses/course.module').then((m) => m.CourseModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRouter, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
