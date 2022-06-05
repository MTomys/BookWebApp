using BookWebAppCore.Data.Configurations;
using BookWebAppCore.Models;
using Microsoft.EntityFrameworkCore;

namespace BookWebAppCore.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new BookEntityTypeConfiguration().Configure(modelBuilder.Entity<Book>());
            new BookAuthorEntityTypeConfiguration().Configure(modelBuilder.Entity<BookAuthor>());
        }
    }
}
