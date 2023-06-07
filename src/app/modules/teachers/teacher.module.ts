import { NgModule } from '@angular/core';

import { TeacherPageComponent } from './pages/teacher-page/teacher-page.component';
import { TeacherRouting } from './teacher.routing';

@NgModule({
  imports: [TeacherRouting],
  exports: [],
  declarations: [TeacherPageComponent],
  providers: [],
})
export class TeacherModule { }
