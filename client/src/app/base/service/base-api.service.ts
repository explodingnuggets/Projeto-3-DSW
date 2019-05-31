import { Injectable, Optional } from '@angular/core';
import { BaseService } from './base.service';
import { AuthClientService } from './auth-client.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService extends BaseService {

  constructor(private http: HttpClient, private authHttp: AuthClientService) {
    super();
  }

  abstract create(data: any);

  abstract read(id?: string) ;

  abstract update(id: string, data: any);

  abstract delete(id: string);
}
