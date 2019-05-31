import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import AuthInfo from '../model/auth-info.model';

@Component({
  selector: 'app-base',
  template: 'Change me',
  styleUrls: []
})
export class BaseComponent {

  constructor(private snack: MatSnackBar) { }

  getAuthInfo(): AuthInfo {
    return {
      username: sessionStorage.getItem('username'),
      admin: (sessionStorage.getItem('is_admin') === 'true'),
      expiresAt: parseInt(sessionStorage.getItem('expires_at')),
      refreshToken: sessionStorage.getItem('refresh_token'),
      accessToken: sessionStorage.getItem('access_token')
    };
  }

  showMessage(message: string, action?: string) {
    this.snack.open(message, action, {
      duration: 4000
    });
  }
}
