package dev.katussska.backend.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private String genre;
    private Boolean available;
    private Integer rating;
    private String language;
    private String publisher;

    @OneToMany(mappedBy = "book")
    private List<Loan> loans;
}

