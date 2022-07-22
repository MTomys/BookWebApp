using BookWebAppCore.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookWebAppCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookAuthorController : ControllerBase
    {

        private readonly IBookAuthorService _bookAuthorService;

        public BookAuthorController(IBookAuthorService bookAuthorService)
        {
            _bookAuthorService = bookAuthorService;
        }


    }
}
