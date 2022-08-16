import { UserService } from './../services/user.service';
import { User } from './../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}
  columns = [
    { columnDef: 'id', header: 'ID' },
    { columnDef: 'name', header: 'Coupon Name' },
    { columnDef: 'code', header: 'Coupon Code' },
    { columnDef: 'status', header: 'Status' },
    { columnDef: 'date', header: 'Date' },
  ];
  data: Observable<User[]> = of([]);
  ngOnInit(): void {
    // get data from API with default value
    this.data = this.userService.getList();
  }
}
