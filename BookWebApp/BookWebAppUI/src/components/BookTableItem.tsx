import { EditBookButton } from './EditBookButton';
import { RemoveBookButton } from './RemoveBookButton';
import { Book } from '../interfaces/index';
import { useState } from 'react';
import { Row, useTable } from 'react-table';

interface BookTableFromReactTableProps {
  row: Row<Book>;
}

export const BookTableItem: React.FC<BookTableFromReactTableProps> = ({
  row,
}) => {
  const [isItemSelected, setIsItemSelected] = useState(false);

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
          <EditBookButton isParentSelected={isItemSelected}></EditBookButton>
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
};
