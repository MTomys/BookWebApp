import React from 'react';

interface RemoveBookButtonProps {
  isParentSelected: boolean;
}

export const RemoveBookButton: React.FC<RemoveBookButtonProps> = ({
  isParentSelected,
}) => {
  return (
    <button
      className={`w-auto p-1 border-solid border-4 border-red-200 bg-red-200 rounded-md text-sm text-white transition align-middle
      ${
        isParentSelected
          ? `opacity-100 cursor-pointer border-red-500 bg-red-500 hover:scale-105`
          : `opacity-50 cursor-default border-red-200 bg-red-200`
      }`}
    >
      Remove Book
    </button>
  );
};
