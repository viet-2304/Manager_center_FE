import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor() {}

  public login(email: string | null, password: string | null) {
    if (email === 'admin' && password === 'admin') {
      console.log('login success');
    }
  }
}
