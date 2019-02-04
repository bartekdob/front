import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';

@NgModule({
  declarations: [UserReservationsComponent],
  imports: [
    CommonModule
  ]
})
export class ReservationModule { }
