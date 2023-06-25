import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SharedDataService {
  private subject = new Subject();

  constructor() { }


  public sendMessage(message: number[]): void {
    this.subject.next(message);
  }

  public getMessage() {
    return this.subject.asObservable();
  }

}
