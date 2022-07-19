import React from 'react';
import './index.css';
import { BookTable } from './components/BookTable';
import { BookTableFromReactTable } from './components/BookTableFromReactTable';
import { AddBookButton } from './components/AddBookButton';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <BookTable />
      <div className="flex w-auto justify-center mx-auto">
        <BookTableFromReactTable />
      </div>
    </div>
  );
}

export default App;
