import { ProductService } from './product.service';
import { Product } from './../interfaces/product';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ResourceService } from '@services/resource.service';
import { HttpClient } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    const resourceServiceStub = jasmine.createSpyObj<ResourceService<Product>>('ResourceService', [
      'getList',
    ]);

    TestBed.configureTestingModule({
      providers: [
        ProductService,
        { provide: ResourceService, usevalue: resourceServiceStub }
      ],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getList', () => {
    it('makes expected function calls', () => {
      const resourceServiceStub: ResourceService<Product> = TestBed.inject(
        ResourceService<Product>
      );

      spyOn(resourceServiceStub, 'getList').and.callThrough();
      service.getList();
      expect(resourceServiceStub.getList).toHaveBeenCalled();
    });
  });
});
