import { TableColumn } from '@shared/models/tableColumns';
import { CoreModule } from 'src/app/core/core.module';
import { Product } from './../../../features/products/interfaces/product';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SharedTableComponent } from './shared-table.component';
import { of } from 'rxjs';
import { ProductService } from '@features/products/services/product.service';
import { MaterialModule } from '@shared/material.module';

describe('SharedTableComponent', () => {
  let component: SharedTableComponent;
  let fixture: ComponentFixture<SharedTableComponent>;
  let el: DebugElement;
  let products: Product[]; //Sample API for testing
  let mockProductService: any;

  products = [
    {
      id: 1,
      name: 'Sample Product 1',
      code: 'asdf',
      status: 'Active',
      date: '27 July, 2022',
    },
    {
      id: 2,
      name: 'Sample Product 2',
      code: 'asdf',
      status: 'Active',
      date: '27 July, 2022',
    },
    {
      id: 1,
      name: 'Sample Product 3',
      code: 'asdf',
      status: 'Active',
      date: '27 July, 2022',
    },
  ];

  beforeEach(async () => {
    mockProductService = jasmine.createSpyObj('ProductService', ['getList']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, CoreModule, MaterialModule],
      declarations: [SharedTableComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: ProductService, useValue: mockProductService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTableComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should display Sample Angular App', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      const appTitle = el.queryAll(By.css('h1.sidebar-app-name'));

      console.log(appTitle);

      // expect(appTitle).toContain('Sample1 Angular App');
      fixture.detectChanges();
      done();
    });
  });

  it('columns has default value', () => {
    expect(component.columns).toEqual([]);
  });

  it('displayedColumns has default value', () => {
    expect(component.displayedColumns).toEqual([]);
  });

  it('search value has default value', () => {
    expect(component.value).toEqual('');
  });

  it('Data source has default value', () => {
    expect(component.dataSource).toBeDefined();
    // fixture.detectChanges();
  });

  it('should check the columns length', () => {
    // fakeProductService.getList.and.returnValue(products);

    let columns: Array<TableColumn>;
    columns = [
      { columnDef: 'id', header: 'ID' },
      { columnDef: 'name', header: 'Product Name' },
      { columnDef: 'code', header: 'Product Code' },
      { columnDef: 'status', header: 'Status' },
      { columnDef: 'date', header: 'Date' },
    ];

    component.columns = columns; //Getting from Input

    component.ngOnInit();

    // fixture.detectChanges();

    let displayedColumnsLength = component.columns.length;
    // console.log(displayedColumnsLength);
    // console.log(component.columns);

    expect(component.displayedColumns).toBeDefined();
    expect(component.displayedColumns.length).toBeGreaterThanOrEqual(
      displayedColumnsLength
    );
  });

  xit('should emit the value', (done) => {
    mockProductService.getList.and.returnValue(of(products));
    fixture.detectChanges();
    done();

    // fixture = TestBed.createComponent(SharedTableComponent);
    // component = fixture.componentInstance;

    // fakeProductService.getList.and.returnValue(products);

    // mockProductService.getList().subscribe((data: Product[]) => {
    //   // expect(data).toEqual(products);
    //   console.log(data);
    //   done();
    // });

    // component.ngAfterViewInit();

    // expect(fakeProductService.getList).toHaveBeenCalled();
    // done();

    // fixture.detectChanges();

    // let displayedColumnsLength = component.displayedColumns;

    // expect(component.displayedColumns).toBeDefined();
    // console.log(displayedColumnsLength);

    // component.dataSource.subscribe((val: any) => {
    //   // position = x;

    //   console.log(val);

    //   expect(val.id).not.toBeUndefined();
    //   expect(val.id).not.toBeNaN();
    //   expect(val.id).not.toBeNull();
    //   done();
    // });
  });
});
