using BookWebAppCore.Models;

namespace BookWebAppCore.Interfaces
{
    public interface IBookAuthorRepository    
    {
        ICollection<BookAuthor> GetAllBookAuthors();
        BookAuthor GetBookAuthorById(int id);
        BookAuthor GetBookAuthorByFullName(string fullName);
        ICollection<BookAuthor> GetBookAuthorByNationality(string nationality);
    }
}
