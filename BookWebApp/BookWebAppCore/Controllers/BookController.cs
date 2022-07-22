using BookWebAppCore.Dtos;
using BookWebAppCore.Interfaces;
using BookWebAppCore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookWebAppCore.Controllers
{
    [Route("api/books")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        public ICollection<BookDto> GetBooks()
        {
            return _bookService.GetAllBooks();
        }

    }
}
