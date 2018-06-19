import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BaseModule } from './base/base.module';
import { RouterModule } from '@angular/router';
import { BookParkingModule } from './page-components/book-parking/book-parking.module';
import { routing } from 'app/app.routing';
import { RouteSummaryModule } from './page-components/route-summary/route-summary.module';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localeFr from '@angular/common/locales/en-GB';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeFr, 'en-GB');

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
  providers: [
      { provide: LOCALE_ID, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
