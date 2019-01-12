import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelsComponent } from './hotels.component';
import {HotelsRoutingModule} from './hotels-routing.module';
import {RouterModule} from '@angular/router';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

@NgModule({
  declarations: [HotelsListComponent, HotelsComponent, HotelDetailsComponent],
  imports: [
    CommonModule, HotelsRoutingModule
  ],
  exports: [HotelsListComponent, HotelsComponent, HotelDetailsComponent]
})
export class HotelsModule { }
