export interface Book {
  id: number;
  bookName: string;
  bookGenre: string;
  pageCount: number;
  bookAuthorName: string;
  isbnNumber: string;
}

export interface SelectedRow {
  id: number;
  isSelected: boolean;
}
