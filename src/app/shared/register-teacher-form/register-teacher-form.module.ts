import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';

import { RegisterTeacherFormComponent } from './register-teacher-form.component';

@NgModule({
  imports: [ToastModule],
  exports: [RegisterTeacherFormComponent],
  declarations: [RegisterTeacherFormComponent],
  providers: [],
})
export class TeacherRegisterForm { }
