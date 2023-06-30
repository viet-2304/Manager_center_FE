import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserInformationFormComponent } from './user-information-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [UserInformationFormComponent],
  declarations: [UserInformationFormComponent],
  providers: [],
})
export class UserInformation { }
