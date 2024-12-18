package dev.katussska.backend.controller;

import dev.katussska.backend.entity.Book;
import dev.katussska.backend.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/all")
    public List<Book> getAllBooks() {
        // Add logging to verify method is being called
        System.out.println("Fetching all books");

        List<Book> books = bookService.getAllBooks();

        // Log the results
        System.out.println("Found books: " + books.size());

        return books;
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {
        // Add logging to verify method is being called
        System.out.println("Fetching book with id: " + id);

        Book book = bookService.getBookById(id);

        // Log the results
        System.out.println("Found book: " + book);

        return book;
    }

    @GetMapping("/search/title")
    public List<Book> getBooksByTitle(@RequestParam String title) {
        // Add logging to verify method is being called
        System.out.println("Searching for title: " + title);

        List<Book> books = bookService.searchBooksByTitle(title);

        // Log the results
        System.out.println("Found books: " + books.size());

        return books;
    }

    @GetMapping("/filter")
    public List<Book> filterBooks(
            @RequestParam(required = false) String availability,
            @RequestParam(required = false) String author,
            @RequestParam(required = false) String language,
            @RequestParam(required = false) String publisher,
            @RequestParam(required = false) Integer rating) {

        // Add logging to verify method is being called
        System.out.println("Filtering books with parameters: " +
                "availability=" + availability + ", " +
                "author=" + author + ", " +
                "language=" + language + ", " +
                "publisher=" + publisher + ", " +
                "rating=" + rating);

        List<Book> books = bookService.filterBooks(availability, author, language, publisher, rating);

        // Log the results
        System.out.println("Found books: " + books.size());

        return books;
    }

    @GetMapping("/filter/author")
    public List<Book> getBooksByAuthor(@RequestParam String author) {
        // Add logging to verify method is being called
        System.out.println("Filtering by author: " + author);

        List<Book> books = bookService.searchBooksByAuthor(author);

        // Log the results
        System.out.println("Found books: " + books.size());

        return books;
    }

    @GetMapping("/filter/genre")
    public List<Book> getBooksByGenre(@RequestParam String genre) {
        // Add logging to verify method is being called
        System.out.println("Filtering by genre: " + genre);

        List<Book> books = bookService.searchBooksByGenre(genre);

        // Log the results
        System.out.println("Found books: " + books.size());

        return books;
    }

    @GetMapping("/filter/availability")
    public List<Book> getBooksByAvailability(@RequestParam boolean available) {
        // Add logging to verify method is being called
        System.out.println("Filtering by availability: " + available);

        List<Book> books = bookService.searchBooksByAvailability(available);

        // Log the results
        System.out.println("Found books: " + books.size());

        return books;
    }

    @GetMapping("/filter/publisher")
    public List<Book> getBooksByPublisher(@RequestParam String publisher) {
        // Add logging to verify method is being called
        System.out.println("Filtering by publisher: " + publisher);

        List<Book> books = bookService.searchBooksByPublisher(publisher);

        // Log the results
        System.out.println("Found books: " + books.size());

        return books;
    }

    @GetMapping("/filter/language")
    public List<Book> getBooksByLanguage(@RequestParam String language) {
        // Add logging to verify method is being called
        System.out.println("Filtering by language: " + language);

        List<Book> books = bookService.searchBooksByLanguage(language);

        // Log the results
        System.out.println("Found books: " + books.size());

        return books;
    }

    @GetMapping("/filter/rating")
    public List<Book> getBooksByRating(@RequestParam int rating) {
        // Add logging to verify method is being called
        System.out.println("Filtering by rating: " + rating);

        List<Book> books = bookService.searchBooksByRating(rating);

        // Log the results
        System.out.println("Found books: " + books.size());

        return books;
    }
}