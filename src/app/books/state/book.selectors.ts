import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from '../book.model';


// Selector functions
const getBookFeatureState = createFeatureSelector<BookState>('books');

export const getBooks = createSelector(
  getBookFeatureState,
  state => state.books
);

export const getSearchString = createSelector(
  getBookFeatureState,
  state => state.searchString
);

export const getSearchedBooks = createSelector(
  getBookFeatureState,
  state => state.searchedBooks
);

export const getshowBookCover = createSelector(
  getBookFeatureState,
  state => state.showBookCover
);

export const getSelectedBook = createSelector(
  getBookFeatureState,
  state => state.selectedBook
);

export const getNextBooksURL = createSelector(
  getBookFeatureState,
  state => state.next
);

export const getError = createSelector(
  getBookFeatureState,
  state => state.error
);
