import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../models/user.model';

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
  constructor(private _httpClient: HttpClient) {}

  // get all the users from the database
  getAllUser(): Observable<IUser[]> {
    return this._httpClient
      .get<IUser[]>(`${this.baseUrl}/users`)
      .pipe(catchError(this.errorHandler));
  }

  // create a new user
  createUser(user: IUser): Observable<IUser> {
    return this._httpClient
      .post<IUser>(
        `${this.baseUrl}/users`,
        JSON.stringify(user),
        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  // Find a user by ID
  getSingleUser(id: number): Observable<IUser> {
    return this._httpClient
      .get<IUser>(`${this.baseUrl}/users/${id}`)

      .pipe(catchError(this.errorHandler));
  }

  // Update a user details
  updateUser(id: number, user: IUser): Observable<IUser> {
    return this._httpClient
      .patch<IUser>(
        `${this.baseUrl}/users/${id}`,
        JSON.stringify(user),
        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  // delete a user from database
  deleteUser(id: number) {
    return this._httpClient
      .delete<IUser>(`${this.baseUrl}/users/${id}`, this.httpOptions)

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
