using BookWebAppCore.Models;

namespace BookWebAppCore.Interfaces
{
    public interface IBookRepository    
    {
        ICollection<Book> GetAllBooks();
        Book GetBookById(int id);
        Book GetBookByIsbnNumber(string isbnNumber);
        ICollection<Book> GetBooksByGenre(string bookGenre);
        bool CreateBook(Book book);
    }
}
