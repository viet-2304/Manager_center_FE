import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SubjectModel } from '../models/subject.model';

@Injectable({providedIn: 'root'})
export class SubjectService {
  private apiHost = `${environment.localAPi}`;

  constructor(private httpClient: HttpClient) { }

  public getAllSubject(): Observable<SubjectModel[]> {
    return this.httpClient.get<SubjectModel[]> (`${this.apiHost}/subject/getAll`)
  }
}
