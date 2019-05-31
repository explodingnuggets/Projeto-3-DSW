import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl: string = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Auth> {
    return this.http.post<Auth>(this.loginUrl, {
      username,
      password
    });
  }
}
