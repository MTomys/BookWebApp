using AutoMapper;
using BookWebAppCore.Dtos;
using BookWebAppCore.Models;

namespace BookWebAppCore.MapperProfiles
{
    public class BookProfile : Profile
    {
        public BookProfile()
        {
            CreateMap<Book, BookDto>()
                .ForMember
                (dest => dest.BookAuthorName, opt => opt.MapFrom(
                        source => $"{source.BookAuthor.FirstName} {source.BookAuthor.LastName}" ))
                .ReverseMap();
        }

    }
}
