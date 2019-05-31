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

  create(teatro: Teatro) {

  }

  read(id?: string): Observable<Teatro | Teatro[]> {
    if (id) {
      return this.authHttp.get<Teatro>(this.url + '/' + id);
    } else {
      return this.authHttp.get<Teatro[]>(this.url);
    }
  }

  update(id: string, teatro: Teatro) {

  }

  delete(id: string) {

  }
}
