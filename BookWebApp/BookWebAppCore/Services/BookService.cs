using AutoMapper;
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

        public ServiceResult<ICollection<BookDto>> GetAllBooks()
        {
            List<BookDto> booksDto;
            try
            {
                booksDto = _mapper.Map<List<BookDto>>(_bookRepository.GetAllBooks());
            }
            catch (Exception e)
            {
                return new ServiceResult<ICollection<BookDto>>
                {
                    Data = Array.Empty<BookDto>(),
                    IsOperationSuccessful = false,
                    OperationMessage = CommonErrorMessages.GetServiceResultErrorMessage(e),
                };
            }
            var result = new ServiceResult<ICollection<BookDto>>
            {
                Data = booksDto,
                IsOperationSuccessful = true,
                OperationMessage = $"Books succesfully fetched",
            };

            return result;
        }

        public ServiceResult<BookDto> CreateBook(BookDto bookCreate)
        {
            var book = _mapper.Map<Book>(bookCreate);

            var getBookAuthorByFullNameResult = _bookAuthorService.GetBookAuthorByFullName(bookCreate.BookAuthorName);

            if (! getBookAuthorByFullNameResult.IsOperationSuccessful)
            {
                return new ServiceResult<BookDto>
                {
                    Data = null,
                    IsOperationSuccessful = false,
                    OperationMessage = $"Could not create book, reason: {getBookAuthorByFullNameResult.OperationMessage}",
                };
            }

            book.BookAuthorId = _bookAuthorService.GetBookAuthorByFullName(bookCreate.BookAuthorName).Data.BookAuthorId;

            try
            {
                _bookRepository.CreateBook(book);
            }
            catch (Exception e)
            {
                return new ServiceResult<BookDto>
                {
                    Data = null,
                    IsOperationSuccessful = false,
                    OperationMessage = CommonErrorMessages.GetServiceResultErrorMessage(e),
                };
            }

            var result = new ServiceResult<BookDto>
            {
                Data = null,
                IsOperationSuccessful = true,
                OperationMessage = $"Book succesfully created"
            };

            return result;
        }

    }
}
