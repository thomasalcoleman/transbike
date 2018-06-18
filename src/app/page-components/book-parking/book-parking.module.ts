import { NgModule } from '@angular/core';
import { BookParkingComponent } from './book-parking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ReactiveFormsModule,
    ClarityModule,
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
