import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
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
