package com.example.backend.controller;

import com.example.backend.model.Ngo;
import com.example.backend.repository.NgoRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.web.reactive.server.WebTestClient;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class NgoControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private WebTestClient testClient;

    @Autowired
    private NgoRepo ngoRepo;

    @BeforeEach
    public void cleanUp() {
        ngoRepo.deleteAll();
    }

    @Test
    void getNgosReturnNgosInDatabase() {

        //GIVEN
        Ngo test1 = Ngo.builder().name("New NGO").email("test@mail.org").url("https://test.com").tagline("Test tagline").description("Another NGO in the database").sdg("15").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build();
        Ngo test2 = Ngo.builder().name("New NGO 2").email("test2@mail.org").url("https://test2.com").tagline("Test 2 tagline").description("Another another NGO in the database").sdg("10").image("https://02.png").city("Hamburg").country("Germany").region("Europe").build();
        Ngo test3 = Ngo.builder().name("New NGO 3").email("test3@mail.org").url("https://test3.com").tagline("Test 3 tagline").description("Another another another NGO in the database").sdg("3").image("https://03.png").city("Hamburg").country("Germany").region("Europe").build();
        ngoRepo.insert(test1);
        ngoRepo.insert(test2);
        ngoRepo.insert(test3);

        //WHEN
        List<Ngo> actual = testClient.get()
                .uri("/api/ngos")
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(Ngo.class)
                .returnResult()
                .getResponseBody();


        //THEN
        List<Ngo> expected = List.of((Ngo.builder().id(test1.getId()).name("New NGO").email("test@mail.org").url("https://test.com").tagline("Test tagline").description("Another NGO in the database").sdg("15").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build()),
                (Ngo.builder().id(test2.getId()).name("New NGO 2").email("test2@mail.org").url("https://test2.com").tagline("Test 2 tagline").description("Another another NGO in the database").sdg("10").image("https://02.png").city("Hamburg").country("Germany").region("Europe").build()),
                (Ngo.builder().id(test3.getId()).name("New NGO 3").email("test3@mail.org").url("https://test3.com").tagline("Test 3 tagline").description("Another another another NGO in the database").sdg("3").image("https://03.png").city("Hamburg").country("Germany").region("Europe").build()));
        assertEquals(expected, actual);

    }

    @Test
    void addNewNgo() {

        //GIVEN


        //WHEN


        //THEN




    }

    @Test
    void getNgoById() {

        //GIVEN


        //WHEN


        //THEN




    }

    @Test
    void updateNgoById() {

        //GIVEN


        //WHEN


        //THEN




    }

    @Test
    void deleteNgoById() {

        //GIVEN


        //WHEN


        //THEN




    }

    @Test
    void getAllCountries() {

        //GIVEN


        //WHEN


        //THEN




    }
}