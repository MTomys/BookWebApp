import React from 'react';
import './index.css';
import { BookTable } from './components/BookTable';
import { AddBookPanel } from './components/AddBookPanel';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <header>
        <h1 className="text-center text-5xl mt-5">
          Welcome to my BookWebApp application!
        </h1>
      </header>
      <nav>
        <Navbar />
      </nav>
      <main>
        <div className="flex w-3/5 mx-auto justify-end">
          <AddBookPanel />
        </div>
        <div className="flex w-auto mx-auto justify-center">
          <BookTable />
        </div>
      </main>
    </>
  );
}

export default App;
