import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';


/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { BookService } from '../book.service';
import * as BookActions from './book.actions';

@Injectable()
export class BookEffects {

  constructor(private actions$: Actions, private bookService: BookService) { }

  loadBooks$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(BookActions.loadBooks),
        mergeMap(() => this.bookService.getBooks()
          .pipe(
            map(result => BookActions.loadBooksSuccess({ result })),
            catchError(error => of(BookActions.loadBooksFailure({ error })))
          )
        )
      );
  });

  loadSelectedBook$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(BookActions.loadSelectedBook),
        mergeMap((action) => this.bookService.getBook(action.id)
          .pipe(
            map(selectedBook => BookActions.loadSelectedBookSuccess({ selectedBook })),
            catchError(error => of(BookActions.loadSelectedBookFailure({ error })))
          )
        )
      );
  });
}
