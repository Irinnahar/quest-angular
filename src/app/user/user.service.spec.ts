import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from './user';

describe('UserService', () => {
  let userService: UserService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserService],
    });
    userService = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('be able to retrieve users from the API bia GET', () => {
    const dummyUser: User[] = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
    ];

    userService.getAll().subscribe((user) => {
      expect(user.length).toBe(1);
      expect(user).toEqual(dummyUser);
    });
    const request = httpMock.expectOne(`${userService.baseUrl}/users`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyUser);
  });
  afterEach(() => {
    httpMock.verify();
  });
});
