import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelsComponent } from './hotels.component';
import {HotelsRoutingModule} from './hotels-routing.module';
import {RouterModule} from '@angular/router';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import {
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { ReservationComponent } from '../reservation/reservation/reservation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [HotelsListComponent, HotelsComponent, HotelDetailsComponent, ReservationComponent],
  imports: [
    CommonModule, HotelsRoutingModule, MatTabsModule, MatIconModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatMomentDateModule
  ],
  exports: [HotelsListComponent, HotelsComponent, HotelDetailsComponent, ReservationComponent]
})
export class HotelsModule { }
