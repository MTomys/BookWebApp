import { EditBookButton } from './EditBookButton';
import { RemoveBookButton } from './RemoveBookButton';
import { Book } from '../interfaces/index';
import { useState } from 'react';
import { Row, useTable } from 'react-table';

interface BookTableFromReactTableProps {
  row: Row<Book>;
}

export const BookTableItemFromReactTable: React.FC<
  BookTableFromReactTableProps
> = ({ row }) => {
  return (
    <tr
      className="group border text-center select-auto hover:bg-slate-200 transition cursor-pointer"
      {...row.getRowProps()}
    >
      {row.cells.map((cell) => {
        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
      })}
      <span>
        <td className="invisible group-hover:visible ">
          <EditBookButton></EditBookButton>
        </td>
        <td className="invisible group-hover:visible ">
          <RemoveBookButton></RemoveBookButton>
        </td>
      </span>
    </tr>
  );
};

export default BookTableItemFromReactTable;
