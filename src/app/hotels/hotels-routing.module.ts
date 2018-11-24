import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {HotelsListComponent} from './hotels-list/hotels-list.component';
import {HotelsComponent} from './hotels.component';
import {CommonModule} from '@angular/common';


const routes: Route[] = [
  {
    path: '',
    component: <any>HotelsComponent,
    children: [
      {
        path: '',
        component: <any>HotelsListComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
