import { Component } from '@angular/core';
import { LogoutService } from 'src/app/authorization/service/logout.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {

  constructor(private logoutService: LogoutService){}
  public logout(): void {
    this.logoutService.logout()
  }
}
