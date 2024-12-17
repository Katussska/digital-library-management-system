package dev.katussska.backend.service;

import dev.katussska.backend.entities.Book;
import dev.katussska.backend.entities.Loan;
import dev.katussska.backend.repository.BookRepository;
import dev.katussska.backend.repository.LoanRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class LoanService {

    private final LoanRepository loanRepository;
    private final BookRepository bookRepository;

    public LoanService(LoanRepository loanRepository, BookRepository bookRepository) {
        this.loanRepository = loanRepository;
        this.bookRepository = bookRepository;
    }

    public Loan createLoan(Long userId, Long bookId) {
        // Najdi knihu
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        // Zkontroluj, zda je kniha dostupná
        if (!book.getAvailable()) {
            throw new RuntimeException("Book is not available for loan");
        }

        // Vytvoř výpůjčku
        Loan loan = new Loan();
        loan.setUserId(userId);
        loan.setBook(book);
        loan.setLoanDate(LocalDate.now());

        // Aktualizuj dostupnost knihy
        book.setAvailable(false);  // Kniha je nyní nedostupná
        bookRepository.save(book);

        return loanRepository.save(loan);
    }
}
