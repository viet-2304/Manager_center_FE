import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LogoutService {
  constructor() { }
  public logout(): void {
    window.localStorage.clear();
    window.location.replace("/home")
  }
}
