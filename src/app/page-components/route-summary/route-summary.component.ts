import { Component } from '@angular/core';

@Component({
  selector: 'pn-route-summary',
  templateUrl: './route-summary.component.html',
  styles: [`
    agm-map {
      height: 300px;
    }
  `]
})
export class RouteSummaryComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
}
