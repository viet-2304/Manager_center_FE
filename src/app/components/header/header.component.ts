import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // public login(): void {
  //   window.location.replace("/auth/login")
  // }

  public redirect(url: string): void{
    window.location.replace(url)
  }
}
