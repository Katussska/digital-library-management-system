package dev.katussska.backend.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private Integer phone;
    private String password;
    private String registrationDate;

    @OneToMany(mappedBy = "user")
    private List<Loan> loans;
}

