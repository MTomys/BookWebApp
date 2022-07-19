import React from 'react';
import './index.css';
import { BookTable } from './components/BookTable';
import { AddBookButton } from './components/AddBookButton';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex w-1/2 mx-auto justify-end">
        <AddBookButton />
      </div>
      <div className="flex w-auto justify-center mx-auto">
        <BookTable />
      </div>
    </div>
  );
}

export default App;
