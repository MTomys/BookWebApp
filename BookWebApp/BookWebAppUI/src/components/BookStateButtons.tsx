import { Book } from '../interfaces';
import { EditBookButton } from './EditBookButton';
import { RemoveBookButton } from './RemoveBookButton';

interface BookStateButtonsProps {
  selectedBook: Book | null;
}

export const BookStateButtons: React.FC<BookStateButtonsProps> = ({
  selectedBook,
}) => {
  return (
    <td>
      <EditBookButton isParentSelected={selectedBook !== null} />
      <RemoveBookButton isParentSelected={selectedBook !== null} />
    </td>
  );
};
