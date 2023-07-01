import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RoomResponse } from 'src/app/home/models/room.model';
import { learningSession } from 'src/app/modules/courses/models/course.model';

@Injectable({providedIn: 'root'})
export class SharedService {
  private apiHost = `${environment.localAPi}`;

  constructor(private httpClient: HttpClient) { }

  public getAllRoom(): Observable<RoomResponse[]> {
    return this.httpClient.get<RoomResponse[]> (`${this.apiHost}/room/getAll`);
  }

  public getAllLearningSession(): Observable<learningSession[]> {
    return this.httpClient.get<learningSession[]> (`${this.apiHost}/learningSession/getAll`);
  }
}
