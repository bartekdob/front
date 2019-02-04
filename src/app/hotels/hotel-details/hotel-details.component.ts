import { Component, OnInit } from '@angular/core';
import {HotelService} from "../hotel.service";
import {Hotel} from "../models/hotel";
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ReservationService} from '../../reservation/reservation.service';
import {Reservation} from '../../reservation/models/Reservation';
import * as moment from 'moment';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.less']
})
export class HotelDetailsComponent implements OnInit {

  constructor(private hotelService: HotelService, private reservationService: ReservationService, private route: ActivatedRoute, private router: Router, private authService: AuthService) {
  }

  private hotel: Hotel;

  ngOnInit() {
    this.loadHotel();

  }

  loadHotel() {
    this.hotelService.getHotelDetails(this.route.snapshot.params['id']).subscribe(
      (hotel) => this.hotel = hotel);
  }
  Reserve() {
    this.router.navigate(['/hotels/' + this.route.snapshot.url + '/reserve']);
  }

  isLogedIn(): boolean {
    return this.authService.isLoggedIn;
  }
}

