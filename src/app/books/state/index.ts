import * as AppState from '../../state/app.state';
import { BookState } from './book.reducer';

// Extends the app state to include the book feature.
// This is required because books are lazy loaded.
// So the reference to BookState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
    books: BookState;
}
