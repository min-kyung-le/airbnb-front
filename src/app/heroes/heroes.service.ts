import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class HeroesService {
  testUrl = 'http://www.localhost:8080/greeting';

  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  getHeroes(): Observable<any> {
    return this.http.get(this.testUrl);
  }
}
