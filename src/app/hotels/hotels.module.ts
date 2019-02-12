import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelsComponent } from './hotels.component';
import {HotelsRoutingModule} from './hotels-routing.module';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import {
  MatButtonModule,
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
import {ReservationModule} from '../reservation/reservation.module';


@NgModule({
  declarations: [HotelsListComponent, HotelsComponent, HotelDetailsComponent],
  imports: [
    CommonModule, HotelsRoutingModule, MatTabsModule, MatIconModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatMomentDateModule, ReservationModule, MatButtonModule
  ],
  exports: [HotelsListComponent, HotelsComponent, HotelDetailsComponent]
})
export class HotelsModule { }
