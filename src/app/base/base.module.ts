import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import { ApiService } from './services/api-service';

@NgModule({
  exports: [
    HeaderModule
  ],
  providers: [
    ApiService
  ]
})
export class BaseModule {}
