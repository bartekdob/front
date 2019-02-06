import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule, MatCardModule
  ]
})
export class AdminModule { }
