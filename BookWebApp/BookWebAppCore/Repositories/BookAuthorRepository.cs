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

        public BookAuthor GetBookAuthorByFullName(string fullName)
        {
            throw new NotImplementedException();
        }

        public BookAuthor GetBookAuthorById(int id)
        {
            throw new NotImplementedException();
        }

        public ICollection<BookAuthor> GetBookAuthorByNationality(string nationality)
        {
            throw new NotImplementedException();
        }
    }
}
