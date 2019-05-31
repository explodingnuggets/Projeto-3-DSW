import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  protected baseUrl = 'http://localhost:8080/api';

  constructor() { }
}
