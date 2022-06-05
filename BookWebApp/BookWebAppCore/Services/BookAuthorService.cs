using BookWebAppCore.Interfaces;

namespace BookWebAppCore.Services
{
    public class BookAuthorService : IBookAuthorService
    {
        private readonly IBookAuthorRepository _bookAuthorRepository;

        public BookAuthorService(IBookAuthorRepository bookAuthorRepository)
        {
            _bookAuthorRepository = bookAuthorRepository;
        }


    }
}
