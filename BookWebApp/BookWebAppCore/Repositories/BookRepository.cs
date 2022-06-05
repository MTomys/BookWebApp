using BookWebAppCore.Data;
using BookWebAppCore.Interfaces;
using BookWebAppCore.Models;

namespace BookWebAppCore.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly DataContext _dataContext;

        public BookRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public ICollection<Book> GetAllBooks()
        {
            return _dataContext
                .Books
                .OrderBy(book => book.BookId)
                .ToList();
        }
    }
}
