import { Product } from './../interfaces/product';
import { ResourceService } from '@services/resource.service';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(public resourceService: ResourceService<Product>) {
    // super(http);
  }

  getList(){
    return this.resourceService.getList('products');
  }

  // getResourceUrl(): string {
  //   return 'products';
  // }
}
