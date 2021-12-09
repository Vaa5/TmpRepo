import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../state';
import { Store } from '@ngrx/store';
import { Book } from '../book.model';

import { getBooks } from '../state/book.selectors';
import * as BookActions from '../state/book.actions';


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
    this.store.dispatch(BookActions.loadBooks());
  }

}
