import { mockBooks } from '../mock-data/index';
import { bookColumns } from '../mock-data/books/bookColumns';
import { useTable } from 'react-table';
import BookTableItemFromReactTable from './BookTableItemFromReactTable';

interface BookTableProps {}

export const BookTableFromReactTable = () => {
  const columns = bookColumns;
  const data = mockBooks;

  const tableInstance = useTable({ columns, data });

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
            return (
              <BookTableItemFromReactTable
                row={row}
              ></BookTableItemFromReactTable>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
