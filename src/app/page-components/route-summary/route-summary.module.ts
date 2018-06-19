import { NgModule } from '@angular/core';
import { RouteSummaryComponent } from './route-summary.component';
import { AgmCoreModule } from '@agm/core';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AgmCoreModule,
    ClarityModule,
    CommonModule
  ],
  declarations: [
    RouteSummaryComponent
  ],
  exports: [
    RouteSummaryComponent
  ]
})
export class RouteSummaryModule {}
