import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BaseModule } from './base/base.module';
import { RouterModule } from '@angular/router';
import { BookParkingModule } from './page-components/book-parking/book-parking.module';
import { routing } from 'app/app.routing';
import { RouteSummaryModule } from './page-components/route-summary/route-summary.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    BrowserModule,
    ClarityModule,
    BookParkingModule,
    RouteSummaryModule,
    BaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
