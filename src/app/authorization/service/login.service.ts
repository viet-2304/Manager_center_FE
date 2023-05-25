import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginBodyModel, LoginResponse } from '../models/Login.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  private apiHost = `${environment.localAPi}`
  public login(email: string | null, password: string | null): Observable<LoginResponse> {
    // this.httpClient.post<any>(`http://localhost:8080/api/v1/auth/login`, {
    //   email: email,
    //   password: password,
    // });
    return this.httpClient.post<LoginResponse>(
      `${this.apiHost}/auth/login`,
      {
        email: email,
        password: password,
      }
    );
  }
}
