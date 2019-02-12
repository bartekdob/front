import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../../hotels/models/hotel';
import {ActivatedRoute, Route} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import {ReservationService} from '../reservation.service';
import {MatHorizontalStepper} from '@angular/material';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.less']
})
export class ReservationComponent implements OnInit {

  minDate = new Date();
  @Input() hotel: Hotel;
  reservationForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.reservationForm = this.buildReservationForm();
  }

  buildReservationForm() {
    return this.formBuilder.group(
      {
        dateFrom: new FormControl(moment),
        dateTo: new FormControl(moment),
        roomRequests: this.formBuilder.array([this.buildRoomRequest()])
      }
    );
  }

  buildRoomRequest(): FormGroup {
    return this.formBuilder.group({
      roomTypeId: new FormControl(),
      requestedNumber: 1
    });
  }

  get roomRequests(): FormArray {
    return <FormArray>this.reservationForm.get('roomRequests');
  }

  addRoomRequest(): void {
    this.roomRequests.push((this.buildRoomRequest()));
  }

  removeRoomRequest(i: number): void {
    this.roomRequests.removeAt(i);
  }

  sendReservationForm(): void {
    let formData = Object.assign({}, this.reservationForm.value);
    let totalCost = 0;
    formData.hotelId = this.hotel.id;
    formData.roomRequests.forEach(rr => {
      this.hotel.roomTypes.forEach(rt =>{
        if(rt.id == rr.roomTypeId)
          totalCost += rt.prize * rr.requestedNumber;
      })
    })
    formData.totalCost = totalCost;
    formData.dateFrom.add(1, 'hour');
    formData.dateTo.add(1, 'hour');
    this.reservationService.reserve(formData).subscribe(resp => {
        if (resp.ok) {
          window.alert('Dokonano rezerwacji, jest ona teraz widoczna w panelu "Moje rezerwacje".');
        }
        else {
          window.alert('Brak wymaganych pokoi w podanym terminie');
        }
      }
    );
  }

  checkAvailability(): void {
    let formData = Object.assign({}, this.reservationForm.value);
    let totalCost = 0;
    formData.hotelId = this.hotel.id;
    formData.roomRequests.forEach(rr => {
      this.hotel.roomTypes.forEach(rt =>{
        if(rt.id == rr.roomTypeId)
          totalCost += rt.prize * rr.requestedNumber;
      })
    })
    formData.totalCost = totalCost;
    formData.dateFrom.add(1, 'hour');
    formData.dateTo.add(1, 'hour');
    this.reservationService.checkAvailability(formData).subscribe(resp=>{
      if (resp.ok){
        window.alert('Rezerwacja w podanych dniach jest możliwa');
      }
      else{

      }
    });
  }


}
