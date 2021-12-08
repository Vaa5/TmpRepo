import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../state';
import { Store } from '@ngrx/store';
import { Book } from '../book';
import { BookPageActions } from '../state/actions';
import { getBooks } from '../state/book.selectors';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.books$ = this.store.select(getBooks);
    this.store.dispatch(BookPageActions.loadBooks());
  }

}
