import { UserService } from './user.service';
import { User } from './../interfaces/user';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ResourceService } from '@services/resource.service';


describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    const resourceServiceStub = jasmine.createSpyObj<ResourceService<User>>('ResourceService', [
      'getList',
    ]);
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: ResourceService, usevalue: resourceServiceStub }
      ],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getList', () => {
    it('makes expected function calls', () => {
      const resourceServiceStub: ResourceService<User> = TestBed.inject(
        ResourceService<User>
      );

      spyOn(resourceServiceStub, 'getList').and.callThrough();
      service.getList();
      expect(resourceServiceStub.getList).toHaveBeenCalled();
    });
  });
});
