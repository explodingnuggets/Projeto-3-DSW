import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import AuthInfo from '../model/auth-info.model';

@Component({
  selector: 'app-base',
  template: 'Change me',
  styleUrls: []
})
export class BaseComponent {

  constructor(protected snack: MatSnackBar) { }

  getAuthInfo(): AuthInfo | null {
    if (sessionStorage.getItem('username')) {
      return {
        username: sessionStorage.getItem('username'),
        admin: (sessionStorage.getItem('is_admin') === 'true'),
        site: (sessionStorage.getItem('is_site') === 'true'),
        theater: (sessionStorage.getItem('is_theater') === 'true'),
        expiresAt: parseInt(sessionStorage.getItem('expires_at')),
        refreshToken: sessionStorage.getItem('refresh_token'),
        accessToken: sessionStorage.getItem('access_token')
      };
    }

    return null;
  }

  getUsername(): string {
    const authInfo = this.getAuthInfo();
    return (authInfo) ? authInfo.username : null;
  }

  isAdmin(): boolean {
    const authInfo = this.getAuthInfo();
    return (authInfo) ? authInfo.admin : false;
  }

  isSite(): boolean {
    const authInfo = this.getAuthInfo();
    return (authInfo) ? authInfo.site : false;
  }

  isTheater(): boolean {
    const authInfo = this.getAuthInfo();
    return (authInfo) ? authInfo.theater : false;
  }

  loggedIn(): boolean {
    return (this.getAuthInfo()) ? true : false;
  }

  showMessage(message: string, action?: string) {
    this.snack.open(message, action, {
      duration: 4000
    });
  }

  errorUnknown() {
    this.showMessage('Erro desconhecido', 'OK');
  }
}
