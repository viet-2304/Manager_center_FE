import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CourseResponse } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  private apiHost = `${environment.localAPi}`;

  public getAllCourse(): Observable<CourseResponse[]> {
    return this.httpClient.get<CourseResponse[]>(
      `${this.apiHost}/courses/getAllCourses`
    );
  }
}
