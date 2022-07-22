DROP TABLE Books;
DROP TABLE BookAuthors;

insert into BookAuthors(FirstName, LastName, Nationality)
VALUES ('Friedrich', 'Nietzsche', 'German');

insert into BookAuthors(FirstName, LastName, Nationality)
VALUES ('Arthur', 'Schopenhauer', 'German');

insert into BookAuthors(FirstName, LastName, Nationality)
VALUES ('Martin', 'Heidegger', 'German');

select * from BookAuthors;

insert into Books(BookName, BookGenre, PageCount, IsbnNumber, BookAuthorId)
VALUES('Thus Spoke Zarathustra', 'Philosophical', 327, '9780521602617', 1);

insert into Books(BookName, BookGenre, PageCount, IsbnNumber, BookAuthorId)
VALUES('Beyond good and evil', 'Philosophical', 301, '9780394703374', 1);

insert into Books(BookName, BookGenre, PageCount, IsbnNumber, BookAuthorId)
VALUES('God is dead', 'Philosophical', 315, '9789703207824', 1);


insert into Books(BookName, BookGenre, PageCount, IsbnNumber, BookAuthorId)
VALUES('World as Will & Idea', 'Philosophical', 336, '9780460875059', 2);

insert into Books(BookName, BookGenre, PageCount, IsbnNumber, BookAuthorId)
VALUES('The World as Will and Representation, Vol. 1', 'Philosophical', 694, '9780486217611', 2);


insert into Books(BookName, BookGenre, PageCount, IsbnNumber, BookAuthorId)
VALUES('Being and Time', 'Philosophical', 354, '9780631101901', 3);

insert into Books(BookName, BookGenre, PageCount, IsbnNumber, BookAuthorId)
VALUES('Logic: The Question of Truth', 'Philosophical', 376, '9780253021656', 3);

select * from Books;