import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShareDataService {

  private subject = new Subject();
  constructor() { }

  public sendMessage(message: string): void {
    this.subject.next(message)
  }

  public getMessage() {
    return this.subject.asObservable();
  }
}
