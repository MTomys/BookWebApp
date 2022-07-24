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

        public BookAuthor GetBookAuthorByFullName(string fullName)
        {
            return _bookAuthorRepository.GetBookAuthorByFullName(fullName);
        }
    }
}
