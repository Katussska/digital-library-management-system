package dev.katussska.backend.service;

import dev.katussska.backend.entity.Book;
import dev.katussska.backend.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService {
    
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> searchBooksByTitle(String title) {
        return bookRepository.findByTitleContaining(title);
    }

    public List<Book> searchBooksByAuthor(String author) {
        return bookRepository.findByAuthorContaining(author);
    }

    public List<Book> searchBooksByGenre(String genre) {
        return bookRepository.findByGenreContaining(genre);
    }

    public List<Book> searchBooksByAvailability(boolean available) {
        return bookRepository.findByAvailable(available);
    }

    public List<Book> searchBooksByPublisher(String publisher) {
        return bookRepository.findByPublisherContaining(publisher);
    }

    public List<Book> searchBooksByLanguage(String language) {
        return bookRepository.findByLanguageContaining(language);
    }

    public List<Book> searchBooksByRating(int rating) {
        return bookRepository.findByRating(rating);
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public List<Book> filterBooks(String availability, String author, String language, String publisher, Integer rating) {
        // Implement filtering logic here
        // This is just a placeholder implementation
        return bookRepository.findAll().stream()
                .filter(book -> availability == null || book.getAvailable() == Boolean.parseBoolean(availability))
                .filter(book -> (author == null || book.getAuthor().equals(author)))
                .filter(book -> (language == null || book.getLanguage().equals(language)))
                .filter(book -> (publisher == null || book.getPublisher().equals(publisher)))
                .filter(book -> (rating == null || book.getRating() == rating))
                .collect(Collectors.toList());
    }
}
