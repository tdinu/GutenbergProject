export type Book = {
  id: number;
  title: string;
  authors: Author[];
  translators?: any[];
  subjects?: string[];
  bookshelves?: string[];
  languages?: string[];
  copyright?: boolean;
  mediatype?: string;
  formats?: Format;
  download_count?: number;
};

export type Author = {
  name: string;
  birth_year?: number;
  death_year?: number;
};

export type Format = {
  'text/html'?: string;
  'application/epub+zip'?: string;
  'application/x-mobipocket-ebook'?: string;
  'application/rdf+xml'?: string;
  'image/jpeg'?: string;
  'text/plain; charset=us-ascii'?: string;
  'application/octet-stream'?: string;
};
