import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelsComponent } from './hotels.component';
import {HotelsRoutingModule} from './hotels-routing.module';
import {RouterModule} from '@angular/router';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import {MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTabsModule} from '@angular/material';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [HotelsListComponent, HotelsComponent, HotelDetailsComponent, ReservationComponent],
  imports: [
    CommonModule, HotelsRoutingModule, MatTabsModule, MatIconModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule,
  ],
  exports: [HotelsListComponent, HotelsComponent, HotelDetailsComponent, ReservationComponent]
})
export class HotelsModule { }
