package com.example.backend.api;

import com.example.backend.model.Country;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
public class CountriesApiService {

    private final WebClient webClient;

    public CountriesApiService(WebClient webClient) {
        this.webClient = webClient;
    }

    public List<Country> retrieveCountries() {

        //API CALL
         List<Country> countries = webClient.get()
                .uri("https://restcountries.com/v2/all?fields=name,region")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .retrieve()
                .toEntityList(Country.class)
                .block()
                .getBody();

        return countries;
    }
}

