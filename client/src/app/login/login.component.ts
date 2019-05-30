import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Auth } from '../models/auth.model';
import { MatSnackBar } from '@angular/material';
import { config } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private snackbar: MatSnackBar) { }

  showError(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 5000
    })
  }

  ngOnInit() {
    this.auth.login("admin@email.com", "admin").subscribe((data: Auth) => {

    }, (err) => {
      if(err.status === 401) {
        this.showError('Email ou senha incorretos', 'OK');
      } else {
        this.showError('Erro desconhecido', 'OK');
      }
    });
  }

}
