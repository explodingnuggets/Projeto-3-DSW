import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/base/service/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Auth from 'src/app/base/model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  private url = this.baseUrl + '/login';

  constructor(private http: HttpClient) {
    super();
  }

  auth(data: any): Observable<Auth> {
    return this.http.post<Auth>(this.url, data);
  }
}
