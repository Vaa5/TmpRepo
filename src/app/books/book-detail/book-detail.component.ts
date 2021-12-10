import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../state';
import { loadSelectedBook } from '../state/book.actions';
import { getError, getSelectedBook } from '../state/book.selectors';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  selectedBook$ = this.store.select(getSelectedBook);
  error$ = this.store.select(getError);

  constructor(private store: Store<State>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.store.dispatch(loadSelectedBook({ id: params.id }));
      }
    });
  }

}
