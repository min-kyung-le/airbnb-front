import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class MainpageService {
  testUrl = 'http://www.localhost:8080/menus';

  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  getMenus(): Observable<any> {
    return this.http.get(this.testUrl);
  }
}
