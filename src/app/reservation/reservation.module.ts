import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import {ReservationComponent} from './reservation/reservation.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

@NgModule({
  declarations: [UserReservationsComponent, ReservationComponent],
  imports: [
    CommonModule, MatExpansionModule, MatCardModule, MatIconModule, ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatMomentDateModule, MatButtonModule
  ],
  exports: [ReservationComponent]
})
export class ReservationModule { }
