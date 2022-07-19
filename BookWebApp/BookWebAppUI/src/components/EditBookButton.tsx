interface EditBookButtonProps {
  isParentSelected: boolean;
}

export const EditBookButton: React.FC<EditBookButtonProps> = ({
  isParentSelected,
}) => {
  return (
    <button
      className={`w-auto p-1 mr-2 border-solid border-4  rounded-md text-sm text-white transition 
      ${
        isParentSelected
          ? `opacity-100 cursor-pointer border-orange-500 bg-orange-500 hover:scale-105`
          : `opacity-50 cursor-default border-orange-200 bg-orange-200`
      }`}
    >
      Edit Book
    </button>
  );
};
