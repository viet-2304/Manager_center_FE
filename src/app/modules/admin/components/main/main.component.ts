import { Component } from '@angular/core';
import { StudentModel } from 'src/app/home/services/user.model';
import { AdminService } from '../../service/admin.service';
import { ShareDataService } from '../../service/shared-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public sidebarSelected: string ='student';
  constructor(private sharedDataService: ShareDataService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMessage();
  }
  private getMessage(): void {
    this.sharedDataService
      .getMessage()
      .subscribe((res) => {this.sidebarSelected = res + ""});
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
