import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../base/services/api-service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'pn-booking-component',
  templateUrl: './book-parking.component.html',
  styles: [`
    agm-map {
      height: 300px;
    }
  `]
})
export class BookParkingComponent implements OnInit {
  public bookingForm: FormGroup;

  lat: number = 51.678418;
  lng: number = 7.809007;

  public isSubmitting: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  public ngOnInit(): void {
    // this.apiService.getRoute('51.4417418,5.4669028', '50.772367,5.709677').subscribe((response) => {
    //   console.log(response);
    // });

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

    console.log('here');

    this.apiService.bookParking()
      .delay(700)
      .subscribe(() => {
        console.log('rouyer nabig');
        this.router.navigateByUrl('/route-summary');
      });
  }
}
