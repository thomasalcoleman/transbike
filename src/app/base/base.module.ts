import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    HeaderModule
  ]
})
export class BaseModule {}
