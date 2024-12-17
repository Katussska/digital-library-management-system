package dev.katussska.backend.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String password;
    private String registrationDate;

    @Version
    private Integer version;

    @OneToMany(mappedBy = "user")
    private List<Loan> loans;

    public AppUser() {
    }

    // Constructor with all fields
    public AppUser(Long id, String name, String email, String phone, String password, String registrationDate, Integer version, List<Loan> loans) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.registrationDate = registrationDate;
        this.version = version;
        this.loans = loans;
    }

    // Constructor without id and version (for new entities)
    public AppUser(String name, String email, String phone, String password, String registrationDate, List<Loan> loans) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.registrationDate = registrationDate;
        this.loans = loans;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(String registrationDate) {
        this.registrationDate = registrationDate;
    }

    public List<Loan> getLoans() {
        return loans;
    }

    public void setLoans(List<Loan> loans) {
        this.loans = loans;
    }
}