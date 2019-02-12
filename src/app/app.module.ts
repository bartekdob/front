import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {HotelService} from './hotels/hotel.service';
import {CoreModule} from './core/core.module';
import {AuthService} from './auth/auth.service';
import {LoginModule} from './login/login.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Interceptor} from './core/app.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModulesImportModule} from './material-modules-import/material-modules-import.module';
import {MAT_DATE_LOCALE, MatCardModule, MatIconModule, MatInputModule, MatNativeDateModule, MatToolbarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReservationService} from './reservation/reservation.service';
import {ReservationModule} from './reservation/reservation.module';
import {AdminService} from './admin/admin.service';
import {AdminModule} from './admin/admin.module';
import { HotelManagementComponent } from './hotels-management/hotel-management.component';
import {ManagerCanLoadGuard} from './auth/manager-can-load.guard';
import {AdminCanLoadGuard} from './auth/admin-can-load.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    LoginModule,
    ReservationModule,
    BrowserAnimationsModule
  ],
  providers: [HotelService, AuthService, ReservationService, AdminService, {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'}, ManagerCanLoadGuard, AdminCanLoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
