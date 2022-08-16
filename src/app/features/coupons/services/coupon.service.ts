import { Observable } from 'rxjs';
import { Coupon } from '../interfaces/coupon';
import { ResourceService } from '@services/resource.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  constructor(public resourceService: ResourceService<Coupon>) {
  }

  getList(){
    return this.resourceService.getList('coupons');
  }
}
