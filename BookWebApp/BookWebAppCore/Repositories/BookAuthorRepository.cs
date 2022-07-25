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
            return _dataContext
                .BookAuthors
                .ToList();
        }

        public BookAuthor GetBookAuthorByFullName(string fullName)
        {
            var bookAuthors = _dataContext.BookAuthors.Where(author => fullName.Contains(author.LastName));
            var filteredAuthors = bookAuthors.ToList();
            return filteredAuthors.FirstOrDefault(author => $"{author.FirstName} {author.LastName}".Equals(fullName));
        }

        public BookAuthor GetBookAuthorById(int id)
        {
            return _dataContext
                .BookAuthors
                .FirstOrDefault(author => author.BookAuthorId == id);
        }

        public ICollection<BookAuthor> GetBookAuthorByNationality(string nationality)
        {
            return _dataContext
                .BookAuthors
                .Where(author => author.Nationality.Equals(nationality))
                .ToList();
        }
    }
}
