import { BookStateButtons } from './BookStateButtons';
import { mockBooks } from '../mock-data/index';
import React, { useState, useEffect } from 'react';
import { Book } from '../interfaces/index';
import axios from 'axios';
import { BOOKS_API } from '../api/routes';

export const BookTable = () => {
  const [selectedItem, setSelectedItem] = useState<Book | null>(null);
  const [bookData, setBookData] = useState<Book[]>();
  const [requestErrors, setRequestErrors] = useState('');
  const [isDataLoading, setIsDataLoading] = useState(true);

  const fetchData = async () => {
    await axios
      .get(BOOKS_API)
      .then((result) => {
        const formattedResult = result.data.map((book: Book, index: number) => {
          return { ...book, id: index + 1 };
        });
        setBookData(formattedResult);
        setIsDataLoading(false);
      })
      .catch((error) => {
        setIsDataLoading(false);
        setRequestErrors(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <div className="flex-col ">
      <div className="flex justify-center">
        {isDataLoading && (
          <p className="text-xl text-blue-500 my-5">
            Book data is currently loading...
          </p>
        )}
        {requestErrors && (
          <p className="text-xl text-red-500 my-5">
            {' '}
            An error occured while loading the book data: "{requestErrors}",
            please try again later.
          </p>
        )}
      </div>
      <div className="flex justify-center">
        <table className="table-fixed w-3/5">
          <thead>
            <th>Book Name</th>
            <th>Book genre</th>
            <th>Page count</th>
            <th>Book author name</th>
            <th>Isbn Number</th>
          </thead>
          <tbody>
            {bookData?.map((book) => (
              <tr
                data-item={book}
                key={book.id}
                className={`group border text-center select-auto cursor-pointer hover:bg-slate-200 transition ${
                  selectedItem?.id === book.id && `bg-slate-200 border`
                }`}
                data-value={book.id}
                onClick={(e) => handleTableRowClick(e)}
              >
                <td data-title="Name">{book.bookName}</td>
                <td data-title="Genre">{book.bookGenre}</td>
                <td data-title="PageCount">{book.pageCount}</td>
                <td data-title="AuthorName">{book.bookAuthorName}</td>
                <td data-title="IsbnNumber">{book.isbnNumber}</td>
                <td
                  className={`flex m-0.5 justfiy-center align-middle space-x-2 cursor-default group-hover:visible ${
                    selectedItem?.id === book.id ? `visible` : `invisible`
                  }`}
                >
                  <BookStateButtons
                    selectedBook={
                      selectedItem?.id === book.id ? selectedItem : null
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
