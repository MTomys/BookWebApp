using BookWebAppCore.Models;

namespace BookWebAppCore.Interfaces
{
    public interface IBookRepository    
    {
        ICollection<Book> GetAllBooks();
    }
}
