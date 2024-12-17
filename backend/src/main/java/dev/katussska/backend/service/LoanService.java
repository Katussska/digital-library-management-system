package dev.katussska.backend.service;

import dev.katussska.backend.entity.AppUser;
import dev.katussska.backend.entity.Book;
import dev.katussska.backend.entity.Loan;
import dev.katussska.backend.repository.BookRepository;
import dev.katussska.backend.repository.LoanRepository;
import dev.katussska.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class LoanService {

    private final LoanRepository loanRepository;
    private final BookRepository bookRepository;
    private final UserRepository userRepository;  // Přidáno UserRepository

    // Přidej UserRepository do konstruktoru
    public LoanService(LoanRepository loanRepository, BookRepository bookRepository, UserRepository userRepository) {
        this.loanRepository = loanRepository;
        this.bookRepository = bookRepository;
        this.userRepository = userRepository;
    }

    public Loan createLoan(Long userId, Long bookId) {
        // Najdi knihu
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        // Zkontroluj, jestli je kniha dostupná
        if (!book.getAvailable()) {
            throw new RuntimeException("Book is not available for loan");
        }

        // Najdi uživatele
        AppUser appUser = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Vytvoř výpůjčku
        Loan loan = new Loan();
        loan.setUser(appUser);
        loan.setBook(book);
        loan.setLoanDate(LocalDate.now());

        // Aktualizuj dostupnost knihy
        book.setAvailable(false);  // Kniha už není dostupná
        bookRepository.save(book);

        return loanRepository.save(loan);
    }
}
