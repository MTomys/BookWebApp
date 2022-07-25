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
        [ProducesResponseType(200, Type= typeof(ICollection<BookDto>))]
        public IActionResult GetBooks()
        {
            var result = _bookService.GetAllBooks();
            return result.IsOperationSuccessful ?
                Ok(result.Data) :
                BadRequest(result.OperationMessage);
        }

        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [HttpPost]
        public IActionResult CreateBook([FromBody] BookDto bookCreate)
        {
            var result = _bookService.CreateBook(bookCreate);
            return result.IsOperationSuccessful ?
                Ok() :
                BadRequest(result.OperationMessage);
        }

    }
}
