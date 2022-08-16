import { Product } from './../interfaces/product';
import { ProductService } from '@features/products/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService){

  }
  columns = [
    { columnDef: 'id', header: 'ID' },
    { columnDef: 'name', header: 'Product Name' },
    { columnDef: 'code', header: 'Product Code' },
    { columnDef: 'status', header: 'Status' },
    { columnDef: 'date', header: 'Date' },
  ];
  data: Observable<Product[]> = of([]);
  ngOnInit(): void {
    // get data from API with default value
    this.data = this.productService.getList();
  }
}
