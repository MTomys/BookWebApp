namespace BookWebApp.Models
{
    public class Book
    {
        public int BookId { get; set; }

        public string IsbnNumber { get; set; }
        public string BookName { get; set; }
        public string BookGenre { get; set; }
        public int PageCount { get; set; }

        public int BookAuthorId { get; set; }
        public virtual Book BookAuthor { get; set; }
    }
}
