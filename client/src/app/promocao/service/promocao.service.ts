import { Injectable } from '@angular/core';
import { BaseAPIService } from 'src/app/base/service/base-api.service';
import { HttpClient } from '@angular/common/http';
import { AuthClientService } from 'src/app/base/service/auth-client.service';
import { Promocao } from '../model/promocao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService extends BaseAPIService {
  url = this.baseUrl + '/promocao';

  constructor(protected http: HttpClient, protected authHttp: AuthClientService) {
    super(http, authHttp);
  }

  create(promocao: Promocao) {

  }

  read(id?: string): Observable<Promocao | Promocao[]> {
    if (id) {
      return this.authHttp.get(this.url + '/' + id);
    } else {
      return this.authHttp.get(this.url);
    }
  }

  update(id: string, promocao: Promocao) {

  }

  delete(id: string) {
    
  }
}
