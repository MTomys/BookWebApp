interface AddBookButtonProps {
  color: string;
}

export const AddBookButton: React.FC<AddBookButtonProps> = (props) => {
  return <button className="border-solid border-2">Add new book</button>;
};
