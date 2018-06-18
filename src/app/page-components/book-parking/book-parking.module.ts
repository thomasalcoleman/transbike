import { NgModule } from '@angular/core';
import { BookParkingComponent } from './book-parking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    ReactiveFormsModule,
    ClarityModule,
    AgmCoreModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    BookParkingComponent,
  ],
  exports: [
    BookParkingComponent
  ]
})
export class BookParkingModule {}
