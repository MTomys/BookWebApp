using BookWebAppCore.Data;
using BookWebAppCore.Interfaces;
using BookWebAppCore.Models;
using Microsoft.EntityFrameworkCore;

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
                .Include(book => book.BookAuthor)
                .ToList();
        }

        public Book GetBookById(int id)
        {
            return _dataContext
                .Books
                .FirstOrDefault(book => book.BookId == id);
        }

        public Book GetBookByIsbnNumber(string isbnNumber)
        {
            return _dataContext
                .Books
                .FirstOrDefault(book => book.IsbnNumber.Equals(isbnNumber));
        }

        public ICollection<Book> GetBooksByGenre(string bookGenre)
        {
            return _dataContext
                .Books
                .Where(book => book.BookGenre.Equals(bookGenre))
                .ToList();
        }
    }
}
