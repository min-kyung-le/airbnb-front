import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class MainpageService {
  menuUrl = 'http://www.localhost:8080/menulist';
  roomUrl = 'http://www.localhost:8080/roomlist';

  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  getMenus(): Observable<any> {
    return this.http.get(this.menuUrl);
  }

  getRooms(): Observable<any> {
    return this.http.get(this.roomUrl);
  }
}
