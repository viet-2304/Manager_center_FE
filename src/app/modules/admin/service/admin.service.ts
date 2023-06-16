import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StudentModel } from 'src/app/home/services/user.model';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private httpClient: HttpClient) {}
  private apiHost = `${environment.localAPi}`;

  public getAllStudent(): Observable<StudentModel[]> {
    return this.httpClient.get<StudentModel[]>(
      `${this.apiHost}/student/getAllStudent`
    );
  }

  public updateUserState(email:string, status: boolean): Observable<any> {
    return this.httpClient.get(
      `${this.apiHost}/user/updateStatus?email=${email}&status=${status}`
    )
  }
}
