import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';
import {MaterialModulesImportModule} from '../material-modules-import/material-modules-import.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, MaterialModulesImportModule//MatToolbarModule, MatIconModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
