import { EditBookButton } from './EditBookButton';
import { RemoveBookButton } from './RemoveBookButton';
import { Book } from '../interfaces/index';

import { useState } from 'react';

interface BookTableItemProps {
  book: Book;
  isSelected?: boolean;
}

export const BookTableItem: React.FC<BookTableItemProps> = ({ book }) => {
  return (
    <tr
      key={book.id}
      className="group border text-center select-auto hover:bg-slate-200 transition cursor-pointer"
    >
      <td className="">{book.name}</td>
      <td className="">{book.authorName}</td>
      <td className="">{book.isbnNumber}</td>
      <span>
        <td className="invisible group-hover:visible ">
          <EditBookButton />
        </td>
        <td className="invisible group-hover:visible">
          <RemoveBookButton />
        </td>
      </span>
    </tr>
  );
};

export default BookTableItem;
