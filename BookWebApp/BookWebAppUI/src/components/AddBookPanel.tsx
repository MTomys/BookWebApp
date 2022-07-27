import { AddBookButton } from './AddBookButton';
import { AddBookForm } from './AddBookForm';
import { useState } from 'react';

export const AddBookPanel = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div onClick={() => setShowForm(true)}>
        <AddBookButton />
      </div>
      <AddBookForm
        isVisible={showForm}
        toggleVisibility={() => setShowForm(false)}
      />
    </>
  );
};
