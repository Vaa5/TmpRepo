export interface Book {
  id: number | null;
  title: string;
  subjects: string[];
  authors: Person[];
  // translators: Persons[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: Format;
  download_count: number;
}

// State for this feature (Book)
export interface BookState {
  count: number;
  next: string;
  previous: string | null;
  results: Book[];
  error: string;
}

export interface Format {
  imageSrc: string | null;
  textUrl: string | null;
  downloadLink: string | null;
}

export interface Person {
  birth_year: number | null;
  death_year: number | null;
  name: string;
}

export interface Result {
  count: number;
  next: string;
  previous: string | null;
  results: Book[];
}
