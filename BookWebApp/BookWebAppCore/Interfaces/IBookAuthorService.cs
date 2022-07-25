using BookWebAppCore.Models;

namespace BookWebAppCore.Interfaces
{
    public interface IBookAuthorService
    {
        ServiceResult<BookAuthor> GetBookAuthorByFullName(string fullName);

    }
}
