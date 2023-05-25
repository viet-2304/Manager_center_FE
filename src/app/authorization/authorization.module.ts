import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationRouting } from './authorization.routing';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    AuthorizationRouting
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [],
})
export class AuthorizationModule { }
