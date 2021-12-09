import { createAction, props } from '@ngrx/store';
import { Result } from '../book.model';


export const loadBooks = createAction(
  '[Product Page] Load'
);

export const loadBooksSuccess = createAction(
  '[Book API] Load Success',
  props<{ result: Result }>()
);

export const loadBooksFailure = createAction(
  '[Book API] Load Fail',
  props<{ error: string }>()
);
