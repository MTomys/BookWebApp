import React from 'react';
import './index.css';
import { BookTable } from './components/BookTable';
import { AddBookPanel } from './components/AddBookPanel';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex w-3/5 mx-auto justify-end">
        <AddBookPanel />
      </div>
      <div className="flex w-auto mx-auto justify-center">
        <BookTable />
      </div>
    </div>
  );
}

export default App;
