import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  title = 'manager_center_FE';
  public isAuth = false;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isAuth = this.isAuthorization();
    this.cdr.detectChanges();
  }
  private isAuthorization(): boolean {
    const path = window.location.pathname;
    return path.includes('/auth');
  }
}
