import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../base/services/api-service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'pn-booking-component',
  templateUrl: './book-parking.component.html'
})
export class BookParkingComponent implements OnInit {
  public bookingForm: FormGroup;

  public isSubmitting: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  public ngOnInit(): void {
    this.bookingForm = new FormGroup({
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      bike: new FormControl('', Validators.required)
    });
  }

  public onSubmit(event) {
    event.preventDefault();

    this.isSubmitting = true;

    this.apiService.bookParking()
      .delay(700)
      .subscribe(() => {
        this.router.navigateByUrl('/route-summary');
      });
  }
}
