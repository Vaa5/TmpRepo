
/* NgRx */
import { createReducer, on } from '@ngrx/store';
import { BookState } from '../book.model';
import * as BookActions from './book.actions';


const initialState: BookState = {
  count: 0,
  next: '',
  previous: '',
  books: [],
  selectedBook: null,
  searchedBooks: [],
  searchString: '',
  showBookCover: true,
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
      books: action.result.results,
      searchedBooks: action.result.results,
      error: ''
    };
  }),
  on(BookActions.loadBooksFailure, (state, action): BookState => {
    return {
      ...state,
      books: [],
      error: action.error
    };
  }),
  on(BookActions.toggleBookCoverVisibility, (state, action): BookState => {
    return {
      ...state,
      showBookCover: !state.showBookCover
    };
  }),
  on(BookActions.loadSelectedBookSuccess, (state, action): BookState => {
    return {
      ...state,
      selectedBook: action.selectedBook,
      error: ''
    };
  }),
  on(BookActions.loadSelectedBookFailure, (state, action): BookState => {
    return {
      ...state,
      selectedBook: null,
      error: action.error
    };
  }),
  on(BookActions.loadMoreBooksSuccess, (state, action): BookState => {
    const mergedBooks = state.books.concat(action.result.results);
    return {
      ...state,
      count: action.result.count,
      next: action.result.next,
      previous: action.result.previous,
      books: mergedBooks,
      error: ''
    };
  }),
  on(BookActions.loadMoreBooksFailure, (state, action): BookState => {
    return {
      ...state,
      selectedBook: null,
      error: action.error
    };
  }),
  on(BookActions.searchBooks, (state, action): BookState => {
    return {
      ...state,
      searchString: action.searchString
    };
  }),
  on(BookActions.searchBooksFinished, (state, action): BookState => {
    return {
      ...state,
      searchedBooks: action.searchedBooks
    };
  })
);
