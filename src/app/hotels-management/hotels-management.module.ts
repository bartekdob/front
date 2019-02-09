import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagedHotelsListComponent } from './managed-hotels-list/managed-hotels-list.component';
import { ManagedHotelEditComponent } from './managed-hotel-edit/managed-hotel-edit.component';
import { VirtualReceptionComponent } from './virtual-reception/virtual-reception.component';
import {HotelCreateComponent} from './hotel-create/hotel-create.component';
import {HotelsManagementRoutingModule} from './hotels-management-routing.module';
import {HotelManagementComponent} from './hotel-management.component';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatStepperModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [HotelManagementComponent, ManagedHotelsListComponent, ManagedHotelEditComponent, VirtualReceptionComponent, HotelCreateComponent],
  imports: [
    CommonModule, HotelsManagementRoutingModule, MatCardModule, MatStepperModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatExpansionModule, MatCheckboxModule, MatDividerModule, MatListModule
  ],
  exports: [HotelCreateComponent, ManagedHotelEditComponent, ManagedHotelsListComponent, VirtualReceptionComponent]
})
export class HotelsManagementModule { }
