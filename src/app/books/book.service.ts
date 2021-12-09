import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { Result } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksUrl = 'http://gutendex.com/books/';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Result> {
    return this.http.get<Result>(this.booksUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  private handleError(err: any) {

    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
