package dev.katussska.backend.repository;

import dev.katussska.backend.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByTitleContaining(String title);

    List<Book> findByAuthorContaining(String author);

    List<Book> findByGenreContaining(String genre);

    List<Book> findByAvailable(boolean available);

    List<Book> findByPublisherContaining(String publisher);

    List<Book> findByLanguageContaining(String language);

    List<Book> findByRating(int rating);
}
