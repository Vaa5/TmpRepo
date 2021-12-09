import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from '../book.model';


// Selector functions
const getBookFeatureState = createFeatureSelector<BookState>('books');

export const getBooks = createSelector(
  getBookFeatureState,
  state => state.results
);

export const getError = createSelector(
  getBookFeatureState,
  state => state.error
);
