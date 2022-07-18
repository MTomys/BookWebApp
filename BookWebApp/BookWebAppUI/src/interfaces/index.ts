export interface Book {
  id: number;
  name: string;
  authorName: string;
  isbnNumber: string;
}

export interface SelectedRow {
  id: number;
  isSelected: boolean;
}
