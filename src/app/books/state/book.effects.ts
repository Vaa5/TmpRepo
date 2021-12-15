import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, switchMap, withLatestFrom, filter, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { BookService } from '../book.service';
import * as BookActions from './book.actions';
import { Store } from '@ngrx/store';
import { BookState } from '../book.model';
import { getBooks, getNextBooksURL } from './book.selectors';

@Injectable()
export class BookEffects {

  constructor(private actions$: Actions, private bookService: BookService, private store: Store<BookState>) { }

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

  loadMoreBooks$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(BookActions.loadMoreBooks),
        withLatestFrom(this.store.select(getNextBooksURL).pipe(
          filter(url => !!url)
        )),
        mergeMap(([action, nextBookUrl]) => this.bookService.getMoreBooks(nextBookUrl)
          .pipe(
            map(result => BookActions.loadMoreBooksSuccess({ result })),
            catchError(error => of(BookActions.loadMoreBooksFailure({ error })))
          )
        )
      );
  });

  loadSelectedBook$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(BookActions.loadSelectedBook),
        switchMap((action) => this.bookService.getBook(action.id)
          .pipe(
            map(selectedBook => BookActions.loadSelectedBookSuccess({ selectedBook })),
            catchError(error => of(BookActions.loadSelectedBookFailure({ error })))
          )
        )
      );
  });

  searchBooks$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(BookActions.searchBooks),
        withLatestFrom(this.store.select(getBooks).pipe(
          filter(books => !!books.length)
        )),
        mergeMap(([action, books]) => this.bookService.searchBooks(books, action.searchString)
          .pipe(
            map((searchedBooks) => BookActions.searchBooksFinished({ searchedBooks })))
        )
      );
  });

  // getSearchedBooks$ = createEffect(() => {
  //   return this.actions$
  //     .pipe(
  //       ofType(BookActions.searchBook),
  //       withLatestFrom(this.store.select(getBooks)),
  //       switchMap(([action, books]) =>
  //         of({ searchString: action.searchString, books })
  //           .pipe(
  //             // filter((param) => param.books.filter(b => b.title.includes(param.searchString))),
  //             map((param) => {
  //               const searchedBooks = param.searchString ?
  //                 param.books.filter(book => {
  //                   return book.title.toLowerCase().includes(param.searchString.toLowerCase());
  //                 })
  //                 : param.books;
  //               return BookActions.searchBooksFinished({ searchedBooks, searchString: param.searchString });
  //             }))
  //       ));
  // });

  // getSearchedBooks$ = createEffect(() => {
  //   return this.actions$
  //     .pipe(
  //       ofType(BookActions.searchBook),
  //       withLatestFrom(this.store.select(getBooks)),
  //       switchMap(([action, books]) =>
  //         of({ searchString: action.searchString, books })
  //           .pipe(
  //             map((param) => {
  //               const searchedBooks = param.searchString ?
  //                 param.books.filter(book => {
  //                   return book.title.toLowerCase().indexOf(param.searchString.toLowerCase()) === ;
  //                 })
  //                 : param.books;
  //               return BookActions.searchBooksFinished({ searchedBooks, searchString: param.searchString });
  //             }))
  //       ));
  // });

}
