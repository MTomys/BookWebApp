using AutoMapper;
using BookWebAppCore.Dtos;
using BookWebAppCore.Interfaces;
using BookWebAppCore.Models;

namespace BookWebAppCore.Services
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _bookRepository;
        private readonly IMapper _mapper;

        public BookService(IBookRepository bookRepository, IMapper mapper)
        {
            _bookRepository = bookRepository;
            _mapper = mapper;
        }

        public ICollection<BookDto> GetAllBooks()
        {
            var booksDto = _mapper.Map<List<BookDto>>(_bookRepository.GetAllBooks());
            return booksDto;
        }
    }
}
