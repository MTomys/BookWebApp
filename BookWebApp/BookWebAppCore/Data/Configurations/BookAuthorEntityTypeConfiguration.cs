using BookWebAppCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookWebAppCore.Data.Configurations
{
    public class BookAuthorEntityTypeConfiguration : IEntityTypeConfiguration<BookAuthor>
    {
        public void Configure(EntityTypeBuilder<BookAuthor> builder)
        {
            builder.Property(ba => ba.FirstName)
                .HasColumnType("nvarchar(100)")
                .IsRequired();

            builder.Property(ba => ba.LastName)
                .HasColumnType("nvarchar(100)")
                .IsRequired();

            builder.Property(ba => ba.Nationality)
                .HasColumnType("nvarchar(100)");

            builder.HasMany(ba => ba.Books)
                .WithOne(book => book.BookAuthor)
                .HasForeignKey(book => book.BookAuthorId);

            builder.Navigation(ba => ba.Books)
                .UsePropertyAccessMode(PropertyAccessMode.Property);
        }
    }
}
