import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {MatCardModule, MatIconModule, MatOptionModule, MatSelectModule} from '@angular/material';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AdminPanelComponent, AdminComponent, UsersListComponent],
  imports: [
    CommonModule, MatCardModule, AdminRoutingModule, MatIconModule, MatSelectModule, ReactiveFormsModule
  ]
})
export class AdminModule { }
