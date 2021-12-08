export interface Result {
  count: number;
  next: string;
  previous: string | null;
  results: Book[];
}

export interface Book {
  id: number | null;
  title: string;
  subjects: string[];
  // authors: array of Persons ;
  // translators: Persons[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null ;
  media_type: string;
  // formats: Format;
  download_count: number;
}

export interface Format
{
  string_of_MIME_type: string | URL;
}

export interface Person
{
  birth_year: number | null;
  death_year: number | null;
  name: string;
}
