import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/base/base/base.component';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../service/auth.service';
import Auth from 'src/app/base/model/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent {
  private loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(protected snack: MatSnackBar, private service: AuthService,
    private router: Router) {
    super(snack);
  }

  login() {
    if (this.loginForm.valid) {
      this.service.auth(this.loginForm.getRawValue()).subscribe((auth: Auth) => {
        this.setAuthInfo(auth);
        this.router.navigate(['/']);
      }, (err) => {
        if (err.status === 401 || err.status === 403) {
          this.showMessage('Usuário ou senha inválidos', 'OK');
        } else {
          this.errorUnknown();
        }
      });
    }
  }

  setAuthInfo(auth: Auth) {
    sessionStorage.setItem('username', auth.username);
    sessionStorage.setItem('is_admin', (auth.roles.includes('ROLE_ADMIN')) ? 'true' : 'false');
    sessionStorage.setItem('expires_at', (Date.now() + auth.expires_in * 1000).toString());
    sessionStorage.setItem('refresh_token', auth.refresh_token);
    sessionStorage.setItem('access_token', auth.access_token);
  }
}
