import { books } from '../mock-data/index';
import { AddBookButton } from './AddBookButton';

export const BookTable = () => {
  return (
    <div>
      <h1 className="text-5xl text-center m-5">Book List</h1>
      <div className="flex w-auto justify-center">
        <table className="table-auto w-1/2">
          <thead className="border">
            <th className="">Book name</th>
            <th>Book author name</th>
            <th>ISBN number</th>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr className="group border text-center hover:bg-slate-200 transition cursor-pointer">
                <td className="">{book.name}</td>
                <td className="">{book.authorName}</td>
                <td className="">{book.isbn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
