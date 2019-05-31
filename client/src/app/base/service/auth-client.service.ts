import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import Auth from '../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService extends BaseService {
  private url = this.baseUrl + '/login';

  constructor(private http: HttpClient) {
    super();
  }

  private getHeaders(): {[header: string]: string} {
    const expirationAt = parseInt(sessionStorage.getItem('expires_at'));

    if (Date.now() >= expirationAt) {
      this.refreshToken();
    }

    return {
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    };
  }

  private refreshToken() {
    let data = new URLSearchParams();
    data.set('grant_type', 'refresh_token');
    data.set('refresh_token', sessionStorage.getItem('refresh_token'));

    this.http.post(this.url, data).subscribe((data: Auth) => {
      sessionStorage.setItem('access_token', data.access_token);
      sessionStorage.setItem('expires_at', (Date.now() + data.expires_in).toString());
    }, (err: any) => {
      console.error(err);
      sessionStorage.clear();
    });
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {
      headers: this.getHeaders()
    });
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data, {
      headers: this.getHeaders()
    });
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(url, data, {
      headers: this.getHeaders()
    });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url, {
      headers: this.getHeaders()
    });
  }
}
