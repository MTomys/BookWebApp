import { AddBookButton } from './AddBookButton';
import { AddBookForm } from './AddBookForm';
import { useState } from 'react';

export const AddBookPanel = () => {
  const [addBookPressed, setAddBookPressed] = useState(false);

  return (
    <div>
      <div onClick={() => setAddBookPressed(!addBookPressed)}>
        <AddBookButton />
      </div>
      <AddBookForm />
    </div>
  );
};
