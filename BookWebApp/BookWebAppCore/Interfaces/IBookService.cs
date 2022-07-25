using BookWebAppCore.Dtos;
using BookWebAppCore.Models;

namespace BookWebAppCore.Interfaces
{
    public interface IBookService
    {
        ServiceResult<ICollection<BookDto>> GetAllBooks();

        ServiceResult<BookDto> CreateBook(BookDto bookCreate);
    }
}
