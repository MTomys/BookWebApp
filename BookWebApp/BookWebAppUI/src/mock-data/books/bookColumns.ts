import { Book } from '../../interfaces/index';
import { Column } from 'react-table';

export const bookColumns: Column<Book>[] = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Book name',
    accessor: 'name',
  },
  {
    Header: 'Book author name',
    accessor: 'authorName',
  },
  {
    Header: 'ISBN number',
    accessor: 'isbnNumber',
  },
];
