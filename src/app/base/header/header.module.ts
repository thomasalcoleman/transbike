import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule {}
