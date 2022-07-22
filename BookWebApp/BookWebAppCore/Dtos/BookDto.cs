namespace BookWebAppCore.Dtos
{
    public class BookDto
    {
        public string BookName { get; set; }
        public string BookGenre { get; set; }
        public int PageCount { get; set; }
        public string BookAuthorName { get; set; }
        public string IsbnNumber { get; set; }
    }
}
