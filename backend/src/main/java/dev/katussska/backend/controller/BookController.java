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

    @GetMapping("/search")
    public List<Book> getBooksByTitle(@RequestParam String title) {
        return bookService.searchBooksByTitle(title);
    }

    // Endpoint pro uložení knih z API
    @PostMapping("/import")
    public void importBooks(@RequestParam String query) {
        bookService.saveBooksFromApi(query);
    }
}

