import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-book-toolbar',
  templateUrl: './book-toolbar.component.html',
  styleUrls: ['./book-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookToolbarComponent implements OnInit {
  private showBookCover;
  @Input()
  set ShowBookCover(val: boolean) {
    this.searchForm?.get('showBookCover').setValue(val);
    this.showBookCover = val;
  }

  private searchString: string;
  @Input()
  set SearchString(val: string) {
    this.searchForm?.get('searchString').setValue(val);
    this.searchString = val;
  }

  @Output() showBookCoverChange = new EventEmitter<boolean>();
  @Output() searchStringChange = new EventEmitter<string>();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      showBookCover: this.showBookCover,
      searchString: ''
    });

    // debounceTime(1000),
    this.searchForm.get('searchString').valueChanges.pipe(
      filter((searchStr: string) => (searchStr !== this.searchString))
    ).subscribe((searchString: string) => {
      this.searchString = searchString;
      this.searchStringChange.emit(searchString);
    });

    this.searchForm.get('showBookCover').valueChanges.pipe(
      filter((showBookCover: boolean) => (showBookCover !== this.showBookCover))
    ).subscribe((showBookCover: boolean) => {
      this.showBookCover = showBookCover;
      this.showBookCoverChange.emit(showBookCover);
    });
  }
}
