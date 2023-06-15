import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudentModel } from './user.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  private apiHost = `${environment.localAPi}`;

  public  getCurrentStudent(email: string): Observable<StudentModel> {
    return this.httpClient.get<StudentModel>(
      `${this.apiHost}/student/getCurrentStudent?email=${email}`
    );
  }
}
