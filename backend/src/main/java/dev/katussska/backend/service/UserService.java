package dev.katussska.backend.service;

import dev.katussska.backend.entity.AppUser;
import dev.katussska.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public AppUser register(AppUser appUser) {
        Optional<AppUser> existingAppUserByEmail = userRepository.findByEmail(appUser.getEmail());

        if (existingAppUserByEmail.isPresent())
            throw new IllegalArgumentException("Email is already taken");

        appUser.setPassword(appUser.getPassword());
        return userRepository.save(appUser);
    }

    public AppUser login(String email, String password) {
        Optional<AppUser> existingAppUserOptional = userRepository.findByEmail(email);

        if (existingAppUserOptional.isEmpty() || (!Objects.equals(password, existingAppUserOptional.get().getPassword())))
            throw new IllegalArgumentException("Invalid email or password");

        return existingAppUserOptional.get();
    }

    public AppUser save(AppUser appUser) {
        return userRepository.save(appUser);
    }

    public AppUser findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
}