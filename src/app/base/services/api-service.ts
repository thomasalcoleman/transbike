import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import {IBikeLocation} from './bike-locations.interface';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public bookParking() {
    return of(true);
  }

  public getBikesAroundLocation(): Observable<Array<IBikeLocation>> {
      // https://openbike.nl/api/cycles?ne_lat=50.87815728013861
    return this.httpClient.get<Array<IBikeLocation>>(environment.apiUrl + '/cycles', {
      params: {
          sw_lng: '5.621173805884379',
          sw_lat: '50.81578010189566',
          ne_lng: '5.749873325374232',
          ne_lat: '50.87815728013861'
      }
    });
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
