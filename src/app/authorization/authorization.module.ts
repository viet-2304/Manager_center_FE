import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizationRouting } from './authorization.routing';
import { LoginComponent } from './components/login/login.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './service/user.state';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthorizationRouting,
    ToastModule,
    MessagesModule,
    FormsModule,
    NgxsModule.forFeature([UserState]),
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent, RegisterComponent],
  providers: [],
})
export class AuthorizationModule {}
