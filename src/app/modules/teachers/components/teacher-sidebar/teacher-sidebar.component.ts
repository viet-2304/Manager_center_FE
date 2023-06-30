import { Component } from '@angular/core';
import { ShareDataService } from 'src/app/modules/admin/service/shared-data.service';

@Component({
  selector: 'app-teacher-sidebar',
  templateUrl: './teacher-sidebar.component.html',
  styleUrls: ['./teacher-sidebar.component.scss']
})
export class TeacherSidebarComponent {
  constructor( private sharedDataService: ShareDataService) {}
  public menuActive='student';

  public active(path: string): void {
    this.menuActive = path;
    this.sharedDataService.sendMessage(path)
    // window.location.replace(this.menuActive)
  }
}
