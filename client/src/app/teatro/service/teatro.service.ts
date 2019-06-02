import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthClientService } from 'src/app/base/service/auth-client.service';
import { BaseAPIService } from 'src/app/base/service/base-api.service';
import Teatro from '../model/teatro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeatroService extends BaseAPIService {
  private url = this.baseUrl + '/teatro';

  constructor(protected http: HttpClient, protected authHttp: AuthClientService) {
    super(http, authHttp);
  }

  create(teatro: Teatro): Observable<Teatro> {
    return this.authHttp.post<Teatro>(this.url, teatro);
  }

  read(id?: string): Observable<Teatro | Teatro[]> {
    if (id) {
      return this.authHttp.get<Teatro>(this.url + '/' + id);
    } else {
      return this.authHttp.get<Teatro[]>(this.url);
    }
  }

  update(id: string, teatro: Teatro): Observable<Teatro> {
    return this.authHttp.put<Teatro>(this.url + '/' + id, teatro);
  }

  delete(id: string): Observable<Teatro> {
    return this.authHttp.delete<Teatro>(this.url + '/' + id);
  }
}
