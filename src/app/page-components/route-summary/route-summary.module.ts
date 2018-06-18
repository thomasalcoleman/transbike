import { NgModule } from '@angular/core';
import { RouteSummaryComponent } from './route-summary.component';
import { AgmCoreModule } from '@agm/core';
import { ClarityModule } from '@clr/angular';

@NgModule({
  imports: [
    AgmCoreModule,
    ClarityModule
  ],
  declarations: [
    RouteSummaryComponent
  ],
  exports: [
    RouteSummaryComponent
  ]
})
export class RouteSummaryModule {}
