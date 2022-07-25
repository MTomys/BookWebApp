import { useState } from 'react';

interface AddBookFormProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

export const AddBookForm: React.FC<AddBookFormProps> = ({
  isVisible,
  toggleVisibility,
}) => {
  return (
    <>
      {isVisible && (
        <div className="fixed h-2/3 w-1/3 box-border border-4 left-1/3 top-28 bg-white border-slate-600 shadow-xl">
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
          <div className="flex justify-center w-full">
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
                Book name:
              </label>
              <input
                type="text"
                id="bookName"
                placeholder="Book name"
                className="w-full border rounded-md border-slate-500 text-sm ml-1 pl-1"
              ></input>
            </form>
            <div className="mb-4"></div>
            <div className="mb-4"></div>
            <div className="mb-4"></div>
            <div className="mb-4"></div>
          </div>
        </div>
      )}
    </>
  );
};
