import { mockBooks } from '../mock-data/index';
import { bookColumns } from '../mock-data/books/bookColumns';
import { useState } from 'react';
import { useRowSelect, useTable, Row } from 'react-table';
import { EditBookButton } from './EditBookButton';
import { RemoveBookButton } from './RemoveBookButton';
import { Book } from '../interfaces/index';

export const BookTable = () => {
  const columns = bookColumns;
  const data = mockBooks;

  const [selectedRow, setSelectedRow] = useState<Row<Book>>();
  const [isItemSelected, setIsItemSelected] = useState(false);

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
              <tr
                className={`group border text-center select-auto hover:bg-slate-200 transition cursor-pointer ${
                  isItemSelected &&
                  `shadow-sm border-1 border-slate-400 bg-slate-300 hover:bg-slate-300`
                }`}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      onClick={() => {
                        setIsItemSelected(!isItemSelected);
                      }}
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
                <span className="cursor-default">
                  <td
                    className={`group-hover:visible ${
                      isItemSelected ? `visible` : `invisible`
                    } `}
                  >
                    <EditBookButton
                      isParentSelected={isItemSelected}
                    ></EditBookButton>
                  </td>
                  <td
                    className={`group-hover:visible ${
                      isItemSelected ? `visible` : `invisible`
                    } `}
                  >
                    <RemoveBookButton
                      isParentSelected={isItemSelected}
                    ></RemoveBookButton>
                  </td>
                </span>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
