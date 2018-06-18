import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ApiService {
  public bookParking() {
    return of(true);
  }
}
