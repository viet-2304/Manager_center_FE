import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { RegisterTeacherFormComponent } from './register-teacher-form.component';

@NgModule({
  imports: [
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DropdownModule,
  ],
  exports: [RegisterTeacherFormComponent],
  declarations: [RegisterTeacherFormComponent],
  providers: [],
})
export class TeacherRegisterForm {}
