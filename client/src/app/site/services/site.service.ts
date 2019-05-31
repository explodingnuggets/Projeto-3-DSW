import { Injectable } from '@angular/core';
import { Site } from '../models/site.model';
import { HttpAuthClientService } from 'src/app/services/http-auth-client.service';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  url: string = 'http://localhost:8080/api/site';

  constructor(private http: HttpAuthClientService) { }

  list() {
    return this.http.get<Site[]>(this.url);
  }
}
