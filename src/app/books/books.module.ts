import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './state/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/book.effects';
import { BookCardComponent } from './book-card/book-card.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [BookListComponent, BookCardComponent, BookDetailComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('books', BookReducer),
    EffectsModule.forFeature([BookEffects])
  ]
})
export class BooksModule { }
