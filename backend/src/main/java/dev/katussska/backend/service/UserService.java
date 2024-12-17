package dev.katussska.backend.service;

import dev.katussska.backend.entities.User;
import dev.katussska.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // Další metody pro práci s uživateli (např. registrace)
}
