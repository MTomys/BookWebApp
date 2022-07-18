import { useState } from 'react';

interface BookTableItemProps {
  book: {
    name: string;
    authorName: string;
    isbnNumber: string;
  };
}

export const BookTableItem: React.FC<BookTableItemProps> = ({ book }) => {
  return (
    <tr className="group border text-center select-auto hover:bg-slate-200 transition cursor-pointer ">
      <td className="">{book.name}</td>
      <td className="">{book.authorName}</td>
      <td className="">{book.isbnNumber}</td>
    </tr>
  );
};

export default BookTableItem;
