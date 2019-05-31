import { Injectable } from '@angular/core';
import { Site } from '../models/site.model';
import { HttpAuthClientService } from 'src/app/services/http-auth-client.service';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  url: string = 'http://localhost:8080/api/site';

  constructor(private http: HttpAuthClientService) { }

  get(id: string) {
    return this.http.get<Site>(this.url + '/' + id);
  }

  list() {
    return this.http.get<Site[]>(this.url);
  }

  update(id: string, site: Site) {
    return this.http.put(this.url + '/' + id, site);
  }
}
