import { User } from './../interfaces/user';
import { ResourceService } from '@services/resource.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public resourceService: ResourceService<User>) {
    // super(http);
  }
  getList(){
    return this.resourceService.getList('users');
  }
}
