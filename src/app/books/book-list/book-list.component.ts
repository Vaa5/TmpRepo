import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../state';
import { Store } from '@ngrx/store';
import { Book } from '../book.model';

import { getBooks, getshowBookCover } from '../state/book.selectors';
import * as BookActions from '../state/book.actions';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books$ = this.store.select(getBooks);
  showBookCover$ = this.store.select(getshowBookCover);

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(BookActions.loadBooks());
  }

  showImageChange(checked: boolean): void {
    this.store.dispatch(BookActions.toggleBookCoverVisibility());
  }

}
