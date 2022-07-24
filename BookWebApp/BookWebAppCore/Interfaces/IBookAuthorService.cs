using BookWebAppCore.Models;

namespace BookWebAppCore.Interfaces
{
    public interface IBookAuthorService
    {
        BookAuthor GetBookAuthorByFullName(string fullName);

    }
}
