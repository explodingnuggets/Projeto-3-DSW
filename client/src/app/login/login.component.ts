import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Auth } from '../models/auth.model';
import { MatSnackBar } from '@angular/material';
import { config } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private auth: AuthService, private snackbar: MatSnackBar) { }

  showError(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 5000
    });
  }

  ngOnInit() {
  }

  login() {
    if  (this.loginForm.valid) {
      const username = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;

      this.auth.login(username, password).subscribe((data: Auth) => {
        console.log(data);
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
