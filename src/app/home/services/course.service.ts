import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CourseResponse, CourseStudentDto } from '../models/course.model';
import { CourseDetailModel } from 'src/app/modules/courses/models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  private apiHost = `${environment.localAPi}`;

  public getAllCourse(): Observable<CourseResponse[]> {
    return this.httpClient.get<CourseResponse[]>(
      `${this.apiHost}/courses/getAllCourses`
    );
  }

  public addStudentToCourse( course: CourseStudentDto): Observable<string> {
    return this.httpClient.post<string>(
      `${this.apiHost}/courses/addStudentToCourse`,course
    )
  }

  public getCourseDetail(courseId: string): Observable<CourseDetailModel[]> {
    return this.httpClient.get<CourseDetailModel[]>(
      `${this.apiHost}/courses/detail?courseId=${courseId}`
    )
  }
}

