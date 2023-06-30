import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInformationFormComponent } from './user-information-form.component';
export const routes: Routes = [{path: '', component:UserInformationFormComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UserInformationRouting {}
