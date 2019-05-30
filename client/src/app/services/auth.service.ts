import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<Auth> {
    return this.http.post<Auth>(this.loginUrl, {
      username: email,
      password
    });
  }
}
