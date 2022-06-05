using BookWebAppCore.Models;

namespace BookWebAppCore.Interfaces
{
    public interface IBookAuthorRepository    
    {
        ICollection<BookAuthor> GetAllBookAuthors();
    }
}
