import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { currentStudent } from '../../models/user.model';
import { studentReducer } from '../../services/student.reducer';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {

  constructor(private store: Store<{currentUser: currentStudent}>) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.select('currentUser').subscribe(res => console.log("res" , res));

  }
  public subjects = [
    { name: 'Maths', courseNumber: 10 },
    { name: 'Literature', courseNumber: 10 },
    { name: 'History', courseNumber: 10 },
    { name: 'Physics', courseNumber: 10 },
    { name: 'Chemistry', courseNumber: 10 },
    { name: 'English', courseNumber: 10 },
    { name: 'Biology', courseNumber: 10 },
    { name: 'Informatics', courseNumber: 10 },
    { name: 'Geology', courseNumber: 10 },
  ];
}
