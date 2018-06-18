import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pn-booking-component',
  templateUrl: './book-parking.component.html'
})
export class BookParkingComponent implements OnInit {
  public bookingForm: FormGroup;

  public ngOnInit(): void {
    this.bookingForm = new FormGroup({
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
    });
  }
}
