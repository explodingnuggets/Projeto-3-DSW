import { Injectable } from '@angular/core';
import { BaseAPIService } from 'src/app/base/service/base-api.service';
import { HttpClient } from '@angular/common/http';
import { AuthClientService } from 'src/app/base/service/auth-client.service';
import Site from '../model/site.model';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SiteService extends BaseAPIService {
  url = this.baseUrl + '/site';

  constructor(protected http: HttpClient, protected authHttp: AuthClientService) {
    super(http, authHttp);
  }

  create(site: Site) {
    return this.authHttp.post<Site>(this.url, site);
  }

  read(id?: string): Observable<Site | Site[]> {
    if (id) {
      return this.authHttp.get<Site>(this.url + '/' + id);
    } else {
      return this.authHttp.get<Site[]>(this.url);
    }
  }

  update(id: string, site: Site): Observable<Site> {
    return this.authHttp.put<Site>(this.url + '/' + id, site);
  }

  delete(id: string): Observable<Site> {
    return this.authHttp.delete<Site>(this.url + '/' + id);
  }
}
