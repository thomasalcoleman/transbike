import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BaseModule } from './base/base.module';
import { RouterModule } from '@angular/router';
import { BookParkingModule } from './page-components/book-parking/book-parking.module';
import { routing } from 'app/app.routing';
import { RouteSummaryModule } from './page-components/route-summary/route-summary.module';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    BookParkingModule,
    RouteSummaryModule,
    BaseModule,
    AgmCoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
