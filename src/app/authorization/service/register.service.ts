import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StudentRegisterModel } from '../models/Register.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private httpClient: HttpClient) {}
  private apiHost = `${environment.localAPi}`;

  public register(
    student: StudentRegisterModel
  ): Observable<StudentRegisterModel> {
    return this.httpClient.post<StudentRegisterModel>(
      `${this.apiHost}/auth/student-register`,
      student
    );
  }
}
