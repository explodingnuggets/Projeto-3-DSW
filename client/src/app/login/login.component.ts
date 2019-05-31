import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Auth } from '../models/auth.model';
import { MatSnackBar } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private auth: AuthService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
    if (sessionStorage.getItem('logged_in') == 'true') {
      this.router.navigate(['']);
    }
  }

  showError(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 5000
    });
  }

  storeAuthData(auth: Auth) {
    sessionStorage.setItem('logged_in', 'true');
    sessionStorage.setItem('username', auth.username);
    sessionStorage.setItem('is_admin', (auth.roles.includes('ROLE_ADMIN')) ? 'true' : 'false');
    sessionStorage.setItem('expires_in', auth.expires_in.toString());
    sessionStorage.setItem('access_token', auth.access_token);
    sessionStorage.setItem('refresh_token', auth.refresh_token);
  }

  login() {
    if  (this.loginForm.valid) {
      const username = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;

      this.auth.login(username, password).subscribe((data: Auth) => {
        this.storeAuthData(data);
        this.router.navigate(['/']);
      }, (err) => {
        if  (err.status === 401) {
          this.showError('Email ou senha incorretos', 'OK');
        } else {
          this.showError('Erro desconhecido', 'OK');
        }
      });
    }
  }
}
