import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { HotelsComponent } from './hotels/hotels.component';
import {HotelService} from './hotels/hotel.service';
import {HttpModule} from '@angular/http';
import {CoreModule} from './core/core.module';
import {AuthService} from './auth/auth.service';
import {LoginModule} from './login/login.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Interceptor} from './core/app.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    LoginModule
  ],
  providers: [HotelService, AuthService, {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
