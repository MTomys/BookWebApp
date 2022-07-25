using BookWebAppCore.Interfaces;
using BookWebAppCore.Models;

namespace BookWebAppCore.Services
{
    public class BookAuthorService : IBookAuthorService
    {
        private readonly IBookAuthorRepository _bookAuthorRepository;

        public BookAuthorService(IBookAuthorRepository bookAuthorRepository)
        {
            _bookAuthorRepository = bookAuthorRepository;
        }

        public ServiceResult<BookAuthor> GetBookAuthorByFullName(string fullName)
        {
            var bookAuthor = _bookAuthorRepository.GetBookAuthorByFullName(fullName);
            return bookAuthor != null ?
                new ServiceResult<BookAuthor>
                {
                    Data = bookAuthor,
                    IsOperationSuccessful = true,
                    OperationMessage = $"Succesfully found author by full name"
                }
                :
                new ServiceResult<BookAuthor>
                {
                    Data = null,
                    IsOperationSuccessful = false,
                    OperationMessage = $"Could not find author by full name",
                };
        }
    }
}
