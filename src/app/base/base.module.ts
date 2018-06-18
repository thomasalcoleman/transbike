import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import { ApiService } from './services/api-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [
    HeaderModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ]
})
export class BaseModule {}
