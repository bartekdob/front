import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../reservation.service';
import {Reservation, UsersReservation} from '../models/UsersReservation';
import {forEach} from '../../../../node_modules/@angular/router/src/utils/collection';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.less']
})
export class UserReservationsComponent implements OnInit {

  constructor(private reservationService: ReservationService) { }

  userReservations: UsersReservation[];

  ngOnInit() {
    this.loadReservations();
  }


  loadReservations() {
    this.reservationService.getUsersReservations().subscribe(resp => {
      this.userReservations = resp;
      this.groupAll();
    });
  }

  groupAll() {
    for(let i = 0; i < this.userReservations.length; i++){
      this.groupRooms(i);
    }
  }

  groupRooms(i: number): void {
    let typeMap: Map<number, number> = new Map<number, number>(); //<roomTypeId, index in new array>
    let newArray: Array<Reservation> = new Array<Reservation>();
    this.userReservations[i].reservation.forEach(res=>{
      if (!typeMap.has(res.room.roomType.id))
      {
        res.quantity=1;
        newArray.push(res);
        typeMap.set(res.room.roomType.id, newArray.length-1);
      }
      else {
        newArray[typeMap.get(res.room.roomType.id)].quantity++;
      }

    })
    this.userReservations[i].reservation = newArray;
  }

}
