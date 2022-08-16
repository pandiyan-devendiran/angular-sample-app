import { UsersComponent } from '@features/users/components/users.component';
import { User } from './../interfaces/user';

import { ProductsComponent } from '@features/products/components/products.component';
import { of } from 'rxjs';

import { CoreModule } from 'src/app/core/core.module';
import { SharedTableComponent } from '../../../shared/components/shared-table/shared-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@shared/material.module';
import { UserService } from '../services/user.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let fakeUserService: jasmine.SpyObj<UserService>;
  let testColumns: any;
  let userService: any;

  let users: User[];

  users = [
    {
      "id" : 1,
      "name": "Sample User 1",
      "email": "123",
      "status": "Active",
      "date": "Jul 27, 2022"
    },
    {
      "id": 2,
      "name": "Sample User 2",
      "email": "456h",
      "status": "Active",
      "date": "Jul 27, 2022"
    },
    {
      "id": 3,
      "name": "Sample User 3",
      "email": "abc",
      "status": "Active",
      "date": "Jul 27, 2022"
    }];

  beforeEach(async () => {
    fakeUserService = jasmine.createSpyObj<UserService>('UserService', [
      'getList',
    ]);

    await TestBed.configureTestingModule({
      declarations: [UsersComponent, SharedTableComponent],
      providers: [{ provide: UserService, useValue: fakeUserService }],
      imports: [CoreModule, MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);

    userService = TestBed.inject(UserService);
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

  it('should assign value for user data', () => {
    fakeUserService.getList.and.returnValue(of(users));
    component.ngOnInit();
    userService.getList().subscribe((x: User[]) => {
      expect(x).toEqual(users);
    });
  });

});
