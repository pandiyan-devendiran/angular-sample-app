import { ProductService } from '@features/products/services/product.service';
import { ProductsComponent } from '@features/products/components/products.component';
import { of } from 'rxjs';

import { CoreModule } from 'src/app/core/core.module';
import { SharedTableComponent } from '../../../shared/components/shared-table/shared-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@shared/material.module';
import { Product } from '../interfaces/product';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let fakeProductService: jasmine.SpyObj<ProductService>;
  let testColumns: any;
  let productService: any;

  let products: Product[];

  products = [{
    "id" : 1,
    "name": "Sample Product 1",
    "code": "123",
    "status": "Active",
    "date": "Jul 27, 2022"
  },
  {
    "id": 2,
    "name": "Sample Product 2",
    "code": "456h",
    "status": "Active",
    "date": "Jul 27, 2022"
  }];

  beforeEach(async () => {
    fakeProductService = jasmine.createSpyObj<ProductService>('ProductService', [
      'getList',
    ]);

    await TestBed.configureTestingModule({
      declarations: [ProductsComponent, SharedTableComponent],
      providers: [{ provide: ProductService, useValue: fakeProductService }],
      imports: [CoreModule, MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);

    productService = TestBed.inject(ProductService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('columns has default value', () => {
    testColumns = [
      { columnDef: 'id', header: 'ID' },
      { columnDef: 'name', header: 'Product Name' },
      { columnDef: 'code', header: 'Product Code' },
      { columnDef: 'status', header: 'Status' },
      { columnDef: 'date', header: 'Date' },
    ];

    expect(component.columns).toEqual(testColumns);
  });

  it('should have the default value for data', () => {
    expect(component.data).toBeDefined();
  });

  it('should assign value for user data', () => {
    fakeProductService.getList.and.returnValue(of(products));
    component.ngOnInit();
    productService.getList().subscribe((x: Product[]) => {
      expect(x).toEqual(products);
    });
  });

});
