import { mockBooks } from '../mock-data/index';
import { AddBookButton } from './AddBookButton';
import { EditBookButton } from './EditBookButton';
import { useState } from 'react';
import { useEffect } from 'react';
import { BookTableItem } from './BookTableItem';
import { Book } from '../interfaces/index';
import { SelectedRow } from '../interfaces/index';

interface BookTableProps {}

export const BookTable = () => {
  const [selectedRows, setSelectedRows] = useState<SelectedRow[]>();
  const [books, setBooks] = useState(mockBooks);

  const selectTableRow = () => {};

  return (
    <>
      <div className="flex w-1/2 justify-end mx-auto">
        <div className=" mb-2 text-xl">
          <AddBookButton />
        </div>
      </div>
      <div className="flex w-auto justify-center mx-auto">
        <table className="table-fixed w-1/2">
          <thead className="">
            <th>Book name</th>
            <th>Book author name</th>
            <th>ISBN number</th>
          </thead>
          <tbody>
            {books.map((b) => (
              <BookTableItem book={b} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
