import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthClientService {

  constructor(private http: HttpClient) { }

  get<T>(url: string) {
    return this.http.get<T>(url, {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      }
    });
  } 

  post<T>(url: string, data: any) {
    return this.http.post<T>(url, data, {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      }
    });
  }

  put<T>(url: string, data: any) {
    return this.http.put<T>(url, data, {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      }
    });
  }

  delete<T> (url: string) {
    return this.http.delete<T>(url, {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      }
    });
  }
}
