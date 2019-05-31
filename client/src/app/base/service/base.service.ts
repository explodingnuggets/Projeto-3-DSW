import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected baseUrl = 'http://localhost:8080/api';

  constructor() { }
}
