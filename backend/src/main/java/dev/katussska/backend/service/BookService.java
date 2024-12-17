package dev.katussska.backend.service;

import com.google.gson.Gson;
import dev.katussska.backend.GoogleBooksResponse;
import dev.katussska.backend.entity.Book;
import dev.katussska.backend.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepository bookRepository;
    private final GoogleBooksService googleBooksService;

    public BookService(BookRepository bookRepository, GoogleBooksService googleBooksService) {
        this.bookRepository = bookRepository;
        this.googleBooksService = googleBooksService;
    }

    public void saveBooksFromApi(String query) {
        String apiResponse = googleBooksService.searchBooks(query);

        GoogleBooksResponse response = new Gson().fromJson(apiResponse, GoogleBooksResponse.class);

        for (GoogleBooksResponse.Items item : response.getItems()) {
            GoogleBooksResponse.VolumeInfo volumeInfo = item.getVolumeInfo();

            Book book = new Book();
            book.setTitle(volumeInfo.getTitle());
            book.setAuthor(String.join(", ", volumeInfo.getAuthors()));
            book.setPublisher(volumeInfo.getPublisher());
            book.setPublishedDate(volumeInfo.getPublishedDate());
            book.setPageCount(volumeInfo.getPageCount());
            book.setDescription(volumeInfo.getDescription());
            book.setLanguage(volumeInfo.getLanguage());

            bookRepository.save(book);
        }
    }

    public List<Book> searchBooksByTitle(String title) {
        return bookRepository.findByTitleContaining(title);
    }
}
