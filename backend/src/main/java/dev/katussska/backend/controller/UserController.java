package dev.katussska.backend.controller;

import dev.katussska.backend.dto.ErrorResponse;
import dev.katussska.backend.entity.AppUser;
import dev.katussska.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.regex.Pattern;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/register", produces = "application/json")
    public ResponseEntity<?> registerUser(@RequestBody AppUser appUser) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@(.+)$";
        Pattern pattern = Pattern.compile(emailRegex);
        if (!pattern.matcher(appUser.getEmail()).matches()) {
            return new ResponseEntity<>(new ErrorResponse("Invalid email format", null), HttpStatus.BAD_REQUEST);
        }
        if (appUser.getName().isEmpty()) {
            return new ResponseEntity<>(new ErrorResponse("Name must not be empty", null), HttpStatus.BAD_REQUEST);
        }
        try {
            AppUser registeredAppUser = userService.register(appUser);
            return new ResponseEntity<>(registeredAppUser, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            logger.error("Error registering user: {}", e.getMessage());
            return new ResponseEntity<>(new ErrorResponse(e.getMessage(), null), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            logger.error("Unexpected error: {}", e.getMessage(), e);
            return new ResponseEntity<>(new ErrorResponse("Internal server error", e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<AppUser> loginUser(@RequestParam String email, @RequestParam String password) {
        try {
            AppUser authenticatedAppUser = userService.login(email, password);
            return new ResponseEntity<>(authenticatedAppUser, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/detail")
    public ResponseEntity<AppUser> getUser(@RequestParam String email) {
        AppUser appUser = userService.findByEmail(email);
        if (appUser != null) {
            return new ResponseEntity<>(appUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}