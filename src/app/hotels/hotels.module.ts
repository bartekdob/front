import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelsComponent } from './hotels.component';
import {HotelsRoutingModule} from './hotels-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HotelsListComponent, HotelsComponent],
  imports: [
    CommonModule, HotelsRoutingModule
  ],
  exports: [HotelsListComponent, HotelsComponent]
})
export class HotelsModule { }
