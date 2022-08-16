import { Coupon } from './../interfaces/coupon';
import { CouponService } from './../services/coupon.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {

  constructor(private couponService: CouponService){

  }
  columns = [
    { columnDef: 'id', header: 'ID' },
    { columnDef: 'name', header: 'Coupon Name' },
    { columnDef: 'code', header: 'Coupon Code' },
    { columnDef: 'status', header: 'Status' },
    { columnDef: 'date', header: 'Date' },
  ];
  data: Observable<Coupon[]> = of([]);//For unit test, giving empty value
  ngOnInit(): void {
    // get data from API with default value
    this.data = this.couponService.getList();
  }

}
