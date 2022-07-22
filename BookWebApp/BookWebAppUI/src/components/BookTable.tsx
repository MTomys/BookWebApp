import { BookStateButtons } from './BookStateButtons';
import { mockBooks } from '../mock-data/index';
import { useState } from 'react';
import { Book } from '../interfaces/index';

export const BookTable = () => {
  const [selectedItem, setSelectedItem] = useState<Book | null>(null);

  const handleTableRowClick = (e: any) => {
    console.log(e.target.value);
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
              className="group border text-center select-auto hover:bg-slate-200 transition cursor-pointer"
              onClick={(e) => console.log(e)}
            >
              <td data-title="Name">{book.name}</td>
              <td data-title="AuthorName">{book.authorName}</td>
              <td data-title="IsbnNumber">{book.isbnNumber}</td>
              <span className="invisible cursor-default group-hover:visible">
                <BookStateButtons selectedBook={null} />
              </span>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
