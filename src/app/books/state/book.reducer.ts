
/* NgRx */
import { createReducer, on } from '@ngrx/store';
import { BookState } from '../book.model';
import * as BookActions from './book.actions';


const initialState: BookState = {
  count: 0,
  next: '',
  previous: '',
  results: [],
  error: '',
};

export const BookReducer = createReducer<BookState>(
  initialState,
  on(BookActions.loadBooksSuccess, (state, action): BookState => {
    return {
      ...state,
      count: action.result.count,
      next: action.result.next,
      previous: action.result.previous,
      results: action.result.results,
      error: ''
    };
  }),
  on(BookActions.loadBooksFailure, (state, action): BookState => {
    return {
      ...state,
      results: [],
      error: action.error
    };
  })
);