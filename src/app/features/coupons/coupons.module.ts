import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponsRoutingModule } from './coupons-routing.module';
import { CouponsComponent } from './components/coupons.component';

@NgModule({
  declarations: [CouponsComponent],
  imports: [CommonModule, CouponsRoutingModule, SharedModule],
})
export class CouponsModule {}
