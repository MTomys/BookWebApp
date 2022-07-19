import { mockBooks } from '../mock-data/index';
import { bookColumns } from '../mock-data/books/bookColumns';
import { useRowSelect, useTable } from 'react-table';
import { BookTableItem } from './BookTableItem';

export const BookTable = () => {
  const columns = bookColumns;
  const data = mockBooks;

  const tableInstance = useTable({ columns, data }, useRowSelect);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <table className="table-fixed w-1/2" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
          <th></th>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return <BookTableItem row={row} />;
          })}
        </tbody>
      </table>
    </>
  );
};
