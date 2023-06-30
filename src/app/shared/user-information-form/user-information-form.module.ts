import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserInformationFormComponent } from './user-information-form.component';
import { UserInformationRouting } from './user-information.routing';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule,UserInformationRouting],
  exports: [UserInformationFormComponent],
  declarations: [UserInformationFormComponent],
  providers: [],
})
export class UserInformation { }
