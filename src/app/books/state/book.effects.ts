import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';


/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookPageActions, BookApiActions } from './actions';
import { BookService } from '../book.service';

@Injectable()
export class BookEffects {

  constructor(private actions$: Actions, private bookService: BookService) { }

  loadBooks$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(BookPageActions.loadBooks),
        mergeMap(() => this.bookService.getBooks()
          .pipe(
            map(result => BookApiActions.loadBooksSuccess({ result })),
            catchError(error => of(BookApiActions.loadBooksFailure({ error })))
          )
        )
      );
  });
}
