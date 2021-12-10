import { createAction, props } from '@ngrx/store';
import { Book, Result } from '../book.model';

export const toggleBookCoverVisibility = createAction(
  '[Book List Page] Toggle Book Cover Visibility'
);

export const loadBooks = createAction(
  '[Book] Load'
);

export const loadBooksSuccess = createAction(
  '[Book] Load Success',
  props<{ result: Result }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Fail',
  props<{ error: string }>()
);

export const loadSelectedBook = createAction(
  '[Book Detail] loadSelectedBook',
  props<{ id: string }>()
);

export const loadSelectedBookSuccess = createAction(
  '[Book Detail] loadSelectedBook Success',
  props<{ selectedBook: Book }>()
);

export const loadSelectedBookFailure = createAction(
  '[Book Detail] loadSelectedBook Fail',
  props<{ error: string }>()
);
