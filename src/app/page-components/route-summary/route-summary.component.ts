import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../base/services/api-service';
import {Observable} from 'rxjs/Observable';

import * as polyline from '@mapbox/polyline';

@Component({
  selector: 'pn-route-summary',
  templateUrl: './route-summary.component.html',
  styles: [`
    agm-map {
      height: 300px;
    }
      
    .ticket-number {
        text-align: center;
    }
  `]
})
export class RouteSummaryComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  lat: number = 50.84972;
  lng: number = 5.70415;

  public routes: Observable<any>;

  public mapPolylines = [];

  public ngOnInit(): void {
      this.routes = this.apiService.getRoute(
          '51.4417418,5.4669028',
          '50.772367,5.709677',
          '2018-06-19T23:00:00'
      );

      this.routes.subscribe((routes) => {
        routes.planning.forEach((plan) => {
          if (plan.source === 'google') {
            const lines = this.decodePolyline(plan.routes[0].overview_polyline.points);

            this.mapPolylines = this.mapPolylines.concat(lines);
          }

          if (plan.source === '9292') {
            this.mapPolylines = this.mapPolylines.concat(this.decodePolyline(plan.legs[0].polyline));
          }
        });

        console.log(this.mapPolylines);
      });
  }

  public decodePolyline(polygon: string): Array<Array<string>> {
      const decoded = polyline.decode(polygon);

      return decoded;
  }
}
