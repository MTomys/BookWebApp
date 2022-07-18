import React from 'react';
import './index.css';
import { BookTable } from './components/BookTable';
import { AddBookButton } from './components/AddBookButton';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <BookTable />
    </div>
  );
}

export default App;
