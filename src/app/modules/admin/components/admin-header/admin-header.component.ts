import { ChangeDetectorRef, Component } from '@angular/core';
import { CurrentUser } from 'src/app/authorization/models/Login.model';
import { LogoutService } from 'src/app/authorization/service/logout.service';
import { CurrentAdmin } from '../../models/admin.model';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent {
  public currentAdmin: CurrentAdmin;
  public currentEmail = window.localStorage.getItem('email') ?? '';

  constructor(
    private logoutService: LogoutService,
    private adminService: AdminService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCurrentAdmin();
  }
  public logout(): void {
    this.logoutService.logout();
  }

  private getCurrentAdmin(): void {
    this.adminService.getCurrentAdmin(this.currentEmail).subscribe((res) => {
      this.currentAdmin = res;
      this.cdr.detectChanges();
    });
  }
}
