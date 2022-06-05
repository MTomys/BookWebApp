using BookWebAppCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookWebAppCore.Data.Configurations
{
    public class BookEntityTypeConfiguration : IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder.Property(book => book.IsbnNumber)
                .HasColumnType("nvarchar(13)")
                .IsRequired();

            builder.Property(book => book.BookName)
                .HasColumnType("nvarchar(200)")
                .IsRequired();

            builder.Property(book => book.BookGenre)
                .HasColumnType("nvarchar(200)");

            builder.Property(book => book.PageCount)
                .HasColumnType("bigint");

            builder.HasIndex(book => book.IsbnNumber)
                .IsUnique(); 
        }
    }
}
