import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public baseUrl = 'https://jsonplaceholder.typicode.com';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  // get all the users from the database
  getAll(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(this.baseUrl + '/users/')
      .pipe(catchError(this.errorHandler));
  }

  // create a new user
  create(user: User): Observable<User> {
    return this.httpClient
      .post<User>(
        this.baseUrl + '/users/',
        JSON.stringify(user),
        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  // Find a user by ID
  find(id: number): Observable<User> {
    return this.httpClient
      .get<User>(this.baseUrl + '/users/' + id)

      .pipe(catchError(this.errorHandler));
  }

  // Update a user details
  update(id: number, user: User): Observable<User> {
    return this.httpClient
      .put<User>(
        this.baseUrl + '/users/' + id,
        JSON.stringify(user),
        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  // delete a user from database
  delete(id: number) {
    return this.httpClient
      .delete<User>(this.baseUrl + '/users/' + id, this.httpOptions)

      .pipe(catchError(this.errorHandler));
  }

  // Error handler
  errorHandler(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error Code: ${error.status}nMessage: ${error.message}';
    }

    return throwError(errorMessage);
  }
}
