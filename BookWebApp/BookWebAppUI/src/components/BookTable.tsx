import { books } from '../mock-data/index';
import { AddBookButton } from './AddBookButton';
import { EditBookButton } from './EditBookButton';
import { useState } from 'react';
import { useEffect } from 'react';
import { BookTableItem } from './BookTableItem';

export const BookTable = () => {
  const [tableElementHovered, setTableElementHovered] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-1/2 justify-end">
          <div className=" mb-2 text-xl">
            <AddBookButton />
          </div>
        </div>
      </div>
      <div className="flex w-auto justify-center">
        <table className="table-auto w-1/2">
          <thead className="border">
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
