import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CourseResponse, CourseStudentDto } from '../models/course.model';
import { CourseDetailModel } from 'src/app/modules/courses/models/course.model';
import { StudentModel } from './user.model';
import { StudentAttendanceModel } from 'src/app/shared/models/student-attendance.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  private apiHost = `${environment.localAPi}`;

  public getAllCourse(): Observable<CourseResponse[]> {
    return this.httpClient.get<CourseResponse[]>(
      `${this.apiHost}/courses/getAllCourses`
    );
  }

  public addStudentToCourse(course: CourseStudentDto): Observable<string> {
    return this.httpClient.post<string>(
      `${this.apiHost}/courses/addStudentToCourse`,
      course
    );
  }

  public getCourseDetail(courseId: string): Observable<CourseDetailModel[]> {
    return this.httpClient.get<CourseDetailModel[]>(
      `${this.apiHost}/courses/detail?courseId=${courseId}`
    );
  }

  public getStudentInCourse(courseID: string): Observable<StudentModel[]> {
    return this.httpClient.get<StudentModel[]>(
      `${this.apiHost}/courses/getStudent?courseId=${courseID}`
    );
  }

  public getAttendance(
    courseDetailid: string
  ): Observable<StudentAttendanceModel[]> {
    return this.httpClient.get<StudentAttendanceModel[]>(
      `${this.apiHost}/attendance/getAttendance?courseId=${courseDetailid}`
    );
  }

  public getCourseById(courseId: string): Observable<CourseResponse> {
    return this.httpClient.get<CourseResponse>(
      `${this.apiHost}/courses?courseId=${courseId}`
    );
  }

  public getCourseByTeacherId(teacherId: string): Observable<CourseResponse[]> {
    return this.httpClient.get<CourseResponse[]>(
      `${this.apiHost}/courses/getByTeacher?teacherId=${teacherId}`
    );
  }

  public getCourseByStudentId(studentId: string): Observable<CourseResponse[]> {
    return this.httpClient.get<CourseResponse[]>(
      `${this.apiHost}/courses/getByStudent?studentId=${studentId}`
    );
  }
}
