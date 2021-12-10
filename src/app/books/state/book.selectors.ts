import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from '../book.model';


// Selector functions
const getBookFeatureState = createFeatureSelector<BookState>('books');

export const getBooks = createSelector(
  getBookFeatureState,
  state => state.results
);

export const getshowBookCover = createSelector(
  getBookFeatureState,
  state => state.showBookCover
);

export const getError = createSelector(
  getBookFeatureState,
  state => state.error
);
