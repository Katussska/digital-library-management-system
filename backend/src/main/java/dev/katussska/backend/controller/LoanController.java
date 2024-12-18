package dev.katussska.backend.controller;

import dev.katussska.backend.entity.Loan;
import dev.katussska.backend.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loans")
public class LoanController {

    private final LoanService loanService;

    @Autowired
    public LoanController(LoanService loanService) {
        this.loanService = loanService;
    }

    @PostMapping
    public ResponseEntity<Loan> createLoan(@RequestParam Long userId, @RequestParam Long bookId) {
        Loan loan = loanService.createLoan(userId, bookId);
        return ResponseEntity.ok(loan);
    }

    @GetMapping("/{id}")
    public List<Loan> getLoansByUserId(@PathVariable Long id) {
        return loanService.getLoansByUserId(id);
    }


}