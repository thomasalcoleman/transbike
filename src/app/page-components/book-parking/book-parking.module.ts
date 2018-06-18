import { NgModule } from '@angular/core';
import { BookParkingComponent } from './book-parking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

@NgModule({
  imports: [
    ReactiveFormsModule,
    ClarityModule
  ],
  declarations: [
    BookParkingComponent,
  ],
  exports: [
    BookParkingComponent
  ]
})
export class BookParkingModule {}
