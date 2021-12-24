import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookState } from '../book.model';

import { getBooks, getNextBooksURL, getSearchedBooks, getSearchString, getshowBookCover } from '../state/book.selectors';
import * as BookActions from '../state/book.actions';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {

  searchString$ = this.store.select(getSearchString);

  searchedBooks$ = this.searchString$.pipe(
    switchMap((books) => this.store.select(getBooks)
      .pipe(
        map((searchString) =>
          books.filter(b => b?.title?.toLocaleLowerCase().includes(searchString?.toLocaleLowerCase()))
        )
      )
    )
  );

  // searchedBooks$ = combineLatest([
  //   this.store.select(getBooks),
  //   this.searchString$
  // ]).pipe(
  //   map(([books, searchString]) =>
  //     books.filter(b => b.title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()))
  //   )
  // );

  // searchedBooks$ = this.store.select(getSearchedBooks);

  showBookCover$ = this.store.select(getshowBookCover);
  // searchString$ = this.store.select(getSearchString);
  showLoadMoreBooks$ = this.store.select(getNextBooksURL);

  constructor(private store: Store<BookState>) { }

  ngOnInit(): void {
    this.store.dispatch(BookActions.loadBooks());
  }

  showBookCoverChange(checked: boolean): void {
    this.store.dispatch(BookActions.toggleBookCoverVisibility());
  }

  searchStringChange(searchString: string): void {
    this.store.dispatch(BookActions.searchBooks({ searchString }));
  }

  loadMore(): void {
    this.store.dispatch(BookActions.loadMoreBooks());
  }

}
