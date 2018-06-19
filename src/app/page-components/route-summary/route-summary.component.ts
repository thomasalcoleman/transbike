import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../base/services/api-service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'pn-route-summary',
  templateUrl: './route-summary.component.html',
  styles: [`
    agm-map {
      height: 300px;
    }
  `]
})
export class RouteSummaryComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  lat: number = 51.678418;
  lng: number = 7.809007;

  public routes: Observable<any>;

  public ngOnInit(): void {
      this.routes = this.apiService.getRoute(
          '51.4417418,5.4669028',
          '50.772367,5.709677',
          '2018-06-19T23:00:00'
      );
  }
}
