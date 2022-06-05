namespace BookWebAppCore.Models
{
    public class BookAuthor
    {
        public int BookAuthorId { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Nationality { get; set; }

        public virtual ICollection<Book> Books { get; set; }
    }
}
