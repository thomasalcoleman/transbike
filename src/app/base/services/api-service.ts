import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public bookParking() {
    return of(true);
  }

  public getRoute(origin: string, destination: string): Observable<Object> {
    return this.httpClient.get(environment.apiUrl, {
      params: {
        origin,
        destination
      }
    });
  }
}
