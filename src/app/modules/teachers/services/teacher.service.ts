import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TeacherModel } from '../models/teacher.model';
import { TeacherRegister } from 'src/app/home/models/teacher.model';

@Injectable({ providedIn: 'root' })
export class TeacherService {
  private apiHost = `${environment.localAPi}`;

  constructor(private httpClient: HttpClient) {}

  public getCurrentTeacher(teacherEmail: string): Observable<TeacherModel> {
    return this.httpClient.get<TeacherModel>(
      `${this.apiHost}/teacher/getCurrentTeacher?teacherEmail=${teacherEmail}`
    );
  }

  public createNewTeacher(teacher: TeacherRegister): Observable<any> {
    return this.httpClient.post<any>(
      `${this.apiHost}/teacher/createNewTeacher`,
       teacher
    );
  }
}
