import * as book from '../book';

/* NgRx */
import { createReducer, on } from '@ngrx/store';
import { BookApiActions, BookPageActions } from './actions';

// State for this feature (Book)
export interface BookState {
  count: number;
  next: string;
  previous: string | null;
  results: book.Book[];
  error: string;
}

const initialState: BookState = {
  count: 0,
  next: '',
  previous: '',
  results: [],
  error: '',
};

export const BookReducer = createReducer<BookState>(
  initialState,
  on(BookApiActions.loadBooksSuccess, (state, action): BookState => {
    return {
      ...state,
      count: action.result.count,
      next: action.result.next,
      previous: action.result.previous,
      results: action.result.results,
      error: ''
    };
  }),
  on(BookApiActions.loadBooksFailure, (state, action): BookState => {
    return {
      ...state,
      results: [],
      error: action.error
    };
  })
);
