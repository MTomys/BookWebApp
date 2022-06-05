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

        public DbSet<Book> Books { get; set; }
        public DbSet<BookAuthor> BookAuthors { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new BookEntityTypeConfiguration().Configure(modelBuilder.Entity<Book>());
            new BookAuthorEntityTypeConfiguration().Configure(modelBuilder.Entity<BookAuthor>());
        }
    }
}
