using BookWebAppCore.Models;
using FluentValidation;

namespace BookWebAppCore.Validators
{
    public class BookAuthorValidator : AbstractValidator<BookAuthor>
    {
        public BookAuthorValidator()
        {
            RuleFor(ba => ba.FirstName)
                .NotEmpty()
                .MaximumLength(100)
                .Must(pred => !pred.Any(char.IsDigit))
                .Must(pred => pred.All(char.IsLetter));

            RuleFor(ba => ba.LastName)
                .NotEmpty()
                .MaximumLength(100)
                .Must(pred => !pred.Any(char.IsDigit))
                .Must(pred => pred.All(char.IsLetter));
        }
    }
}
