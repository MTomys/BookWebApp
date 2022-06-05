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
        }
    }
}
