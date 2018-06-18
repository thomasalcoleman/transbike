import { ModuleWithProviders } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { BookParkingComponent } from './page-components/book-parking/book-parking.component';
import { RouteSummaryComponent } from './page-components/route-summary/route-summary.component';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'book-parking',
}, {
  path: 'book-parking',
  component: BookParkingComponent,
}, {
  path: 'route-summary',
  component: RouteSummaryComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});
