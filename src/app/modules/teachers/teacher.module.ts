import { NgModule } from '@angular/core';
import { AdminModule } from '../admin/admin.module';

import { TeacherPageComponent } from './pages/teacher-page/teacher-page.component';
import { TeacherRouting } from './teacher.routing';
import { TeacherMainComponent } from './components/teacher-main/teacher-main.component';

@NgModule({
  imports: [TeacherRouting, AdminModule],
  exports: [],
  declarations: [TeacherPageComponent, TeacherMainComponent],
  providers: [],
})
export class TeacherModule { }
