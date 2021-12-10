import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book } from '../book.model';
import { State } from '../state';
import { getshowBookCover } from '../state/book.selectors';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;
  showBookCover$ = this.store.select(getshowBookCover);

  constructor(private router: Router, private store: Store<State>) { }

  ngOnInit(): void {
  }

  seeBookDetails(book: Book): void {
    if (book) {
      this.router.navigate(['/details', { id: book.id }]);
    }
  }

}
