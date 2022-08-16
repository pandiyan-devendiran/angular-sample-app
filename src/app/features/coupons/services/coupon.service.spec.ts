import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Coupon } from '../interfaces/coupon';
import { TestBed } from '@angular/core/testing';
import { ResourceService } from '@services/resource.service';
import { CouponService } from './coupon.service';
import { HttpClient } from '@angular/common/http';

describe('CouponService', () => {
  let service: CouponService;

  beforeEach(() => {
    const resourceServiceStub = jasmine.createSpyObj<ResourceService<Coupon>>('ResourceService', [
      'getList',
    ]);
    TestBed.configureTestingModule({
      providers: [
        CouponService,
        { provide: ResourceService, usevalue: resourceServiceStub }
      ],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CouponService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getList', () => {
    it('makes expected calls', () => {
      const resourceServiceStub: ResourceService<Coupon> = TestBed.inject(
        ResourceService<Coupon>
      );

      spyOn(resourceServiceStub, 'getList').and.callThrough();
      service.getList();
      expect(resourceServiceStub.getList).toHaveBeenCalled();
    });
  });
});
