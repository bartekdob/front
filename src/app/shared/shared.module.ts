import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [PageNotFoundComponent, WelcomePageComponent],
  imports: [
    CommonModule
  ],
  exports: [PageNotFoundComponent, WelcomePageComponent]
})
export class SharedModule { }
