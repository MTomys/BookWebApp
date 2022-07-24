using BookWebAppCore.Dtos;
using BookWebAppCore.Models;

namespace BookWebAppCore.Interfaces
{
    public interface IBookService
    {
        public ICollection<BookDto> GetAllBooks();

        public void CreateBook(BookDto bookCreate);
    }
}
