import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule
  ],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule]
})
export class MaterialModulesImportModule { }
