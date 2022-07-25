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
            <div>
              <p className="text-4xl my-5 mx-6">Add a new Book</p>
            </div>
            <div className="h-16 w-16 m-3">
              <button onClick={toggleVisibility}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png"
                  alt="close-button"
                  className="object-fit"
                ></img>
              </button>
            </div>
          </div>

          <div className="flex-col">
            <div className="flex justify-between my-10 ml-5 text-xl">
              <input type="text" placeholder="book name"></input>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
