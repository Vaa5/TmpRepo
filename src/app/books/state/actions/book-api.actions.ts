import { Result } from '../../book';

/* NgRx */
import { createAction, props } from '@ngrx/store';

export const loadBooksSuccess = createAction(
  '[Book API] Load Success',
  props<{ result: Result }>()
);

export const loadBooksFailure = createAction(
  '[Book API] Load Fail',
  props<{ error: string }>()
);
