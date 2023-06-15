import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { httpInterceptorProviders } from './core/interceptor';
import { StoreModule } from '@ngrx/store';
import { currentStudent } from './home/models/user.model';
import { studentReducer } from './home/services/student.reducer';
import { userReducer } from './authorization/service/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      currentStudent: studentReducer,
      currentUser: userReducer
    }),
  ],
  // exports: [HeaderComponent],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
