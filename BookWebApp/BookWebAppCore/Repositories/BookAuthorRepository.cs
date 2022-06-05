using BookWebAppCore.Data;
using BookWebAppCore.Interfaces;
using BookWebAppCore.Models;

namespace BookWebAppCore.Repositories
{
    public class BookAuthorRepository : IBookAuthorRepository
    {
        private readonly DataContext _dataContext;

        public BookAuthorRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public ICollection<BookAuthor> GetAllBookAuthors()
        {
            return _dataContext.BookAuthors.OrderBy(ba => ba.BookAuthorId).ToList();
        }
    }
}
