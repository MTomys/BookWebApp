import { BookStateButtons } from './BookStateButtons';
import { mockBooks } from '../mock-data/index';
import React, { useState } from 'react';
import { Book } from '../interfaces/index';

export const BookTable = () => {
  const [selectedItem, setSelectedItem] = useState<Book | null>(null);

  const handleTableRowClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) => {
    if (e.currentTarget.dataset.value === selectedItem?.id.toString()) {
      setSelectedItem(null);
      return;
    }
    const foundBook = mockBooks.find(
      (book) => book.id.toString() === e.currentTarget.dataset.value
    );
    foundBook && setSelectedItem(foundBook);
  };

  return (
    <>
      <table className="table-fixed w-1/2">
        <thead>
          <th>Book Name</th>
          <th>Book author name</th>
          <th>Isbn Number</th>
        </thead>
        <tbody>
          {mockBooks.map((book) => (
            <tr
              data-item={book}
              key={book.id}
              className={`group border text-center select-auto cursor-pointer hover:bg-slate-200 transition ${
                selectedItem?.id === book.id && `bg-slate-200 border`
              }`}
              data-value={book.id}
              onClick={(e) => handleTableRowClick(e)}
            >
              <td data-title="Name">{book.name}</td>
              <td data-title="AuthorName">{book.authorName}</td>
              <td data-title="IsbnNumber">{book.isbnNumber}</td>
              <span
                className={`cursor-default group-hover:visible ${
                  selectedItem?.id === book.id ? `visible` : `invisible`
                }`}
              >
                <BookStateButtons
                  selectedBook={
                    selectedItem?.id === book.id ? selectedItem : null
                  }
                />
              </span>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
