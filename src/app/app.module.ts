import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { HotelsComponent } from './hotels/hotels.component';
import {HotelService} from './hotels/hotel.service';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
