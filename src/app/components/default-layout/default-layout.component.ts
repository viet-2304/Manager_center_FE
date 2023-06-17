import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  private tokenAuth: string | null;
  constructor() {}
  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authorization();
  }

  public authorization(): void {
    window.location.href = '/home';

    // this.tokenAuth = window.localStorage.getItem('token');
    // if (this.tokenAuth) {
    //   window.location.href = '/home';
    // } else {
    //   window.location.href = '/auth/login';
    // }
  }
}
