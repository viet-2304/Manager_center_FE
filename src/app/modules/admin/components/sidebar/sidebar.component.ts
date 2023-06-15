import { Component } from '@angular/core';
import { ShareDataService } from '../../service/shared-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor( private sharedDataService: ShareDataService) {}
  public menuActive='home';

  public active(path: string): void {
    this.menuActive = path;
    this.sharedDataService.sendMessage(path)
    // window.location.replace(this.menuActive)
  }
}
