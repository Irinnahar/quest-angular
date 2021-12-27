import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UserService } from './user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.model';

describe('UserService', () => {
  let userService: UserService;
  let httpMock: HttpTestingController;
  let http: HttpClient;

  const basicUrl = 'https://jsonplaceholder.typicode.com';
  let mockUsers = [
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
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    http = TestBed.inject(HttpClient);
    userService = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const service: UserService = TestBed.inject(UserService);
    expect(service).toBeTruthy();
  });

  it('should get users list from the API', () => {
    userService.getAllUser().subscribe((users) => {
      expect(users).toEqual(mockUsers);
    });

    httpMock
      .expectOne({
        url: `${basicUrl}/users`,
        method: 'GET',
      })
      .flush(mockUsers);
  });

  it('should get a single user by id', () => {
    const id = 1;

    userService.getSingleUser(id).subscribe((user) => {
      expect(user).toEqual(mockUsers[id]);
    });

    httpMock
      .expectOne({
        method: 'GET',
        url: `${basicUrl}/users/${id}`,
      })
      .flush(mockUsers[id]);
  });

  it('should create a new user', () => {
    const newUser = mockUsers[0];

    userService.createUser(newUser).subscribe((user) => {
      expect(user).toEqual(newUser);
    });

    httpMock
      .expectOne({
        method: 'POST',
        url: `${basicUrl}/users`,
      })
      .flush(newUser);
    expect(http.post.length).toBe(2);
  });

  it('should update a user by Id', () => {
    const newUser = mockUsers[0];
    const dummyId = 1;

    userService.updateUser(dummyId, newUser).subscribe((user) => {
      expect(user).toEqual(newUser);
      expect(user.id).toBe(dummyId);
    });

    httpMock
      .expectOne({
        method: 'PATCH',
        url: `${basicUrl}/users/${dummyId}`,
      })
      .flush(newUser);
  });

  it('should delete a existing user by Id', () => {
    const dummyId = 1;

    userService.deleteUser(dummyId).subscribe((user) => {
      expect(user.id).toBe(dummyId);
    });

    httpMock.expectOne({
      method: 'DELETE',
      url: `${basicUrl}/users/${dummyId}`,
    });
  });
});
