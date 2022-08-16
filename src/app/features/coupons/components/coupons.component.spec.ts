import { of } from 'rxjs';
import { Coupon } from './../interfaces/coupon';
import { CoreModule } from 'src/app/core/core.module';
import { SharedTableComponent } from './../../../shared/components/shared-table/shared-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CouponsComponent } from './coupons.component';
import { CouponService } from './../services/coupon.service';
import { MaterialModule } from '@shared/material.module';

describe('CouponsComponent', () => {
  let component: CouponsComponent;
  let fixture: ComponentFixture<CouponsComponent>;
  let fakeCouponService: jasmine.SpyObj<CouponService>;
  let testColumns: any;
  let couponService: any;

  let coupons: Coupon[];

  coupons = [{
    "id" : 1,
    "name": "50% discount Code",
    "code": "123",
    "status": "Active",
    "date": "Jul 27, 2022"
  },
  {
    "id": 2,
    "name": "Discount Code 2",
    "code": "456h",
    "status": "Active",
    "date": "Jul 27, 2022"
  }];

  beforeEach(async () => {
    fakeCouponService = jasmine.createSpyObj<CouponService>('CouponService', [
      'getList',
    ]);

    await TestBed.configureTestingModule({
      declarations: [CouponsComponent, SharedTableComponent],
      providers: [{ provide: CouponService, useValue: fakeCouponService }],
      imports: [CoreModule, MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponsComponent);

    couponService = TestBed.inject(CouponService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('columns has default value', () => {
    testColumns = [
      { columnDef: 'id', header: 'ID' },
      { columnDef: 'name', header: 'Coupon Name' },
      { columnDef: 'code', header: 'Coupon Code' },
      { columnDef: 'status', header: 'Status' },
      { columnDef: 'date', header: 'Date' },
    ];

    expect(component.columns).toEqual(testColumns);
  });

  it('should have the default value for data', () => {
    expect(component.data).toBeDefined();
  });

  it('should assign value for coupon data', () => {
    fakeCouponService.getList.and.returnValue(of(coupons));
    component.ngOnInit();
    couponService.getList().subscribe((x: Coupon[]) => {
      expect(x).toEqual(coupons);
    });
  });

});
