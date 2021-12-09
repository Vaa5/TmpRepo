import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  seeBookDetails(book: Book): void {
    if (book) {
      this.router.navigate(['/details', { id: book.id }]);
    }
  }

}
