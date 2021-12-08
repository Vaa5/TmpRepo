import { Book } from '../../book';

/* NgRx */
import { createAction, props } from '@ngrx/store';

export const loadBooks = createAction(
  '[Product Page] Load'
);
