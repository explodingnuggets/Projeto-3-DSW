import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { BaseComponent } from '../base/base/base.component';
import AuthInfo from '../base/model/auth-info.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent extends BaseComponent {

  constructor(protected snack: MatSnackBar, private router: Router) {
    super(snack);
  }

  getUsername(): string {
    const authInfo = this.getAuthInfo();
    return (authInfo) ? authInfo.username : null;
  }

  isAdmin(): boolean {
    const authInfo = this.getAuthInfo();
    return (authInfo) ? authInfo.admin : false;
  }

  loggedIn(): boolean {
    return (this.getAuthInfo()) ? true : false;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
