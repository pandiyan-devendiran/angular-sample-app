import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MainShellComponent } from './layouts/main-shell/main-shell.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SharedTableComponent, HeaderComponent, MainShellComponent],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule],
  exports: [SharedTableComponent, HeaderComponent, MainShellComponent],
})
export class SharedModule {}
