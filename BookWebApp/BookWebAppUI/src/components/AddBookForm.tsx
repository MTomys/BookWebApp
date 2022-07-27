import React, { useState } from 'react';
import { Book } from '../interfaces';

interface AddBookFormProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

export const AddBookForm: React.FC<AddBookFormProps> = ({
  isVisible,
  toggleVisibility,
}) => {
  const [bookFormInput, setBookFormInput] = useState<Book>();

  const handleFormSubmit = () => {};

  return (
    <>
      {isVisible && (
        <div className="fixed right-1/3 bottom-1/4 h-2/3 w-1/3 border-4 bg-white border-slate-600 shadow-xl">
          <div className="flex justify-between bg-slate-400">
            <p className="text-3xl m-6">Add a new Book</p>
            <div className="h-16 w-16 m-3">
              <button onClick={toggleVisibility}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png"
                  alt="close-button"
                  className="object-fit border border-slate-900 hover:border-white transition rounded-md"
                ></img>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <form className="w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
              <label
                htmlFor="bookName"
                className="block text-gray-700 font-bold text-sm"
              >
                Book name:
              </label>
              <input
                type="text"
                id="bookName"
                placeholder="Book name"
                className="w-full border rounded-md border-slate-500 text-sm ml-1 pl-1"
              ></input>
              <label
                htmlFor="bookName"
                className="block text-gray-700 font-bold text-sm"
              >
                Book genre:
              </label>
              <input
                type="text"
                id="bookGenre"
                placeholder="Book genre"
                className="w-full border rounded-md border-slate-500 text-sm ml-1 pl-1"
              ></input>
              <label
                htmlFor="bookGenre"
                className="block text-gray-700 font-bold text-sm"
              >
                Page Count:
              </label>
              <input
                type="text"
                id="pageCount"
                placeholder="Page count"
                className="w-full border rounded-md border-slate-500 text-sm ml-1 pl-1"
              ></input>
              <label
                htmlFor="pageCount"
                className="block text-gray-700 font-bold text-sm"
              >
                Book author name:
              </label>
              <input
                type="text"
                id="bookAuthorName"
                placeholder="Book author name"
                className="w-full border rounded-md border-slate-500 text-sm ml-1 pl-1"
              ></input>
              <label
                htmlFor="bookAuthorName"
                className="block text-gray-700 font-bold text-sm"
              >
                Isbn Number:
              </label>
              <input
                type="text"
                id="isbnNumber"
                placeholder="Isbn Number"
                className="w-full border rounded-md border-slate-500 text-sm ml-1 pl-1"
              ></input>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
