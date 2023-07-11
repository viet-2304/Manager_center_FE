import { Component } from '@angular/core';
import { SubjectService } from 'src/app/shared/services/subject.service';

@Component({
  selector: 'app-category-session',
  templateUrl: './category-session.component.html',
  styleUrls: ['./category-session.component.scss'],
})
export class CategorySessionComponent {
  public listSubject: any;
  constructor(private subjectService: SubjectService) {}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getAllSubject();
}
  private getAllSubject(): void {
    this.subjectService.getAllSubject().subscribe((res) => {
      console.log("subject: ", res);

      this.listSubject = res;
    });
  }
}
