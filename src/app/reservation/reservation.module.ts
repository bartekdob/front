import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import {MatCardModule, MatExpansionModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [UserReservationsComponent],
  imports: [
    CommonModule, MatExpansionModule, MatCardModule, MatIconModule
  ]
})
export class ReservationModule { }
