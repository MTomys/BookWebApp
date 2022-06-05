using BookWebAppCore.Models;
using FluentValidation;

namespace BookWebAppCore.Validators
{
    public class BookValidator : AbstractValidator<Book>
    {
        public BookValidator()
        {
            RuleFor(book => book.IsbnNumber)
                .NotEmpty()
                .Length(13)
                .Must(pred => pred.All(Char.IsDigit));

            RuleFor(book => book.BookName)
                .NotEmpty()
                .MaximumLength(200);

            RuleFor(book => book.BookGenre)
                .NotEmpty()
                .MaximumLength(200);

            RuleFor(book => book.PageCount)
                .GreaterThan(0);
        }
    } 
}
