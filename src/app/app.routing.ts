import { ModuleWithProviders } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { BookParkingComponent } from './page-components/book-parking/book-parking.component';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'book-parking',
}, {
  path: 'book-parking',
  component: BookParkingComponent,
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});
