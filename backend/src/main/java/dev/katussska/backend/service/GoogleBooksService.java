package dev.katussska.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class GoogleBooksService {

    private final RestTemplate restTemplate;

    @Value("${google.books.api.key}")
    private String apiKey;

    public GoogleBooksService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String searchBooks(String query) {
        String url = UriComponentsBuilder.fromHttpUrl("https://www.googleapis.com/books/v1/volumes")
                .queryParam("q", query) // zde můžeš přidat parametry, jako je název, autor atd.
                .queryParam("key", apiKey)
                .toUriString();

        return restTemplate.getForObject(url, String.class);
    }
}
