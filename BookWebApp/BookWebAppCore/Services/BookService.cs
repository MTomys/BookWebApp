using AutoMapper;
using BookWebAppCore.Dtos;
using BookWebAppCore.Interfaces;
using BookWebAppCore.Models;

namespace BookWebAppCore.Services
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _bookRepository;
        private readonly IBookAuthorService _bookAuthorService;
        private readonly IMapper _mapper;

        public BookService(IBookRepository bookRepository, IMapper mapper, IBookAuthorService bookAuthorService)
        {
            _bookRepository = bookRepository;
            _mapper = mapper;
            _bookAuthorService = bookAuthorService;
        }

        public ICollection<BookDto> GetAllBooks()
        {
            var booksDto = _mapper.Map<List<BookDto>>(_bookRepository.GetAllBooks());
            return booksDto;
        }

        public void CreateBook(BookDto bookCreate)
        {
            var book = _mapper.Map<Book>(bookCreate);
            book.BookAuthorId = _bookAuthorService.GetBookAuthorByFullName(bookCreate.BookAuthorName).BookAuthorId;
            if (_bookRepository.CreateBook(book) == false)
            {
                throw new InvalidOperationException("Changes could not be saved to the database, item was not added.");
            }
        }

    }
}
