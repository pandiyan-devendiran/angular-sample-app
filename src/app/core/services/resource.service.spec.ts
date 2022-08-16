import { defer, of } from 'rxjs';
import { ResourceService } from './resource.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '@features/products/interfaces/product';
import { TestBed } from '@angular/core/testing';

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe('ResourceService', () => {

  let products: Product[];
  let resourceService: ResourceService<Product>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpClientSpyObj: any;

  //Sample Products to mock the request
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
      id: 3,
      name: 'Sample Product 3',
      code: 'asdf',
      status: 'Active',
      date: '27 July, 2022',
    },
  ];

  beforeEach(() => {

    httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [ResourceService, { provide: HttpClient, useValue:httpClientSpyObj }]
    });

    resourceService = TestBed.inject(ResourceService<Product>);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should return products when getList() is called', (done: DoneFn) => {
    httpClientSpyObj.get.and.returnValue(of(products));

    resourceService.getList('products').subscribe((data) => {
      expect(data).toEqual(products);
      done();
    });

    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });

  it('should throw an error when 404', (done) => {
    const errorResponse = new HttpErrorResponse({
      error: '404 error',
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    resourceService.getList('product').subscribe(
      data => fail('Should have failed with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toContain('404 error');
        done();
      });

      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });

});
