import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public isShow = true;
  public role: string | null;
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.role = window.localStorage.getItem('role');
    if (this.role === 'admin' || this.role === 'teacher') {
      this.isShow = false;
      this.cdr.detectChanges();
    }
  }
}
