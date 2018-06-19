import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../base/services/api-service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/delay';
import {MapTypeControlStyle, MapTypeId} from '@agm/core/services/google-maps-types';

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

  lat: number = 50.8497109;
  lng: number = 5.7051957;

  public modalOpened: boolean = false;

  public chosenModalLocation = null;

  public bikePinLocations: Array<{
    lat: number;
    lng: number;
    type: string;
  }> = [{
    lat: 50.8497034,
    lng: 5.7009666,
    type: 'ov-fiets'
  }, {
    lat: 50.850036,
    lng: 5.7048523,
    type: 'ov-fiets'
  }];

  public mapTypeControlOptions = {
      mapTypeIds: [MapTypeId.SATELLITE]
  };

  public isSubmitting: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  public ngOnInit(): void {
    this.bikePinLocations = [];

    this.apiService.getBikesAroundLocation().subscribe((response) => {
      response.forEach((location) => {
        this.bikePinLocations.push({
            lng: location.longitude,
            lat: location.latitude,
            type: location.systemId === 'ovfiets' ? 'ov-fiets' : 'nextbike'
        });
      });
    });

    this.bookingForm = new FormGroup({
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      departDate: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      bike: new FormControl('', Validators.required)
    });
  }

  public markerClicked(itemIndex) {
    this.chosenModalLocation = this.bikePinLocations[itemIndex];
      console.log(itemIndex, this.chosenModalLocation);

      console.log(this.bikePinLocations[itemIndex]);

    this.modalOpened = true;
      // this.markerClicked
  }

  public confirmModal(): void {
    this.bookingForm.controls.bike.setValue(this.chosenModalLocation.type);

    if (this.bookingForm.valid) {
      this.onSubmit();
    }
  }

  public onSubmit(event?) {
    if (event) {
        event.preventDefault();
    }

    this.isSubmitting = true;

    this.apiService.bookParking()
      .delay(700)
      .subscribe(() => {
        this.isSubmitting = false;

        this.router.navigateByUrl('/route-summary');
      });
  }
}
