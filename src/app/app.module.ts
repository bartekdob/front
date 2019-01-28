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
import {MatIconModule, MatInputModule, MatNativeDateModule, MatToolbarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


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
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
   // MatToolbarModule,
   // MatIconModule
    MaterialModulesImportModule
  ],
  providers: [HotelService, AuthService,  {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
