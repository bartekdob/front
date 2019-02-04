import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../reservation.service';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.less']
})
export class UserReservationsComponent implements OnInit {

  constructor(private reservationService: ReservationService) { }

  userReservations: object;

  ngOnInit() {
    this.loadReservations();
  }

  loadReservations() {
    this.reservationService.getUsersReservations().subscribe(
      resp =>
      {this.userReservations = resp;
        console.log('test');})
  }

}
