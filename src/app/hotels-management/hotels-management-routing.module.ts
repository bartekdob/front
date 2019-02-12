import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ManagedHotelsListComponent} from './managed-hotels-list/managed-hotels-list.component';
import {HotelManagementComponent} from './hotel-management.component';
import {HotelCreateComponent} from './hotel-create/hotel-create.component';
import {ManagedHotelEditComponent} from './managed-hotel-edit/managed-hotel-edit.component';
import {VirtualReceptionComponent} from './virtual-reception/virtual-reception.component';

const routes: Route[] = [
  {
    path: '',
    component: <any>HotelManagementComponent,
    children: [
      {
        path: '',
        component: <any>ManagedHotelsListComponent
      },
      {
        path: 'addHotel',
        component: <any>HotelCreateComponent
      },
      {
        path: 'edit-hotel/:id',
        component: <any>ManagedHotelEditComponent
      },
      {
        path: 'virtual-reception/:id',
        component: <any>VirtualReceptionComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsManagementRoutingModule { }
