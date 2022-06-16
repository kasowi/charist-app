package com.example.backend.controller;

import com.example.backend.dto.NgoDto;
import com.example.backend.model.Ngo;
import com.example.backend.repository.NgoRepo;
import org.junit.jupiter.api.Assertions;
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
    void getNgos_ReturnNgosInDatabase() {

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
    void addNewNgo_ReturnAddedNgo() {

        //GIVEN
        Ngo test = Ngo.builder().name("New NGO").email("test@mail.org").url("https://test.com").tagline("Test tagline").description("Another NGO in the database").sdg("15").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build();


        //WHEN
        Ngo actual = testClient.post()
                .uri("/api/ngos")
                .bodyValue(test)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(Ngo.class)
                .returnResult()
                .getResponseBody();

        //THEN
        assertNotNull(actual);
        assertNotNull(actual.getId());
        Ngo expected = Ngo.builder().id(actual.getId()).name("New NGO").email("test@mail.org").url("https://test.com").tagline("Test tagline").description("Another NGO in the database").sdg("15").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build();
        assertEquals(expected, actual);
    }

    @Test
    void getNgoById_whenIdIsValid() {

        //GIVEN
        Ngo test = Ngo.builder()
                .name("New NGO")
                .email("test@mail.org")
                .url("https://test.com")
                .tagline("Test tagline")
                .description("Another NGO in the database")
                .sdg("15")
                .image("https://01.png")
                .city("Hamburg")
                .country("Germany")
                .region("Europe")
                .build();

        Ngo addNgo = testClient.post()
                .uri("http://localhost:" + port + "/api/ngos")
                .bodyValue(test)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(Ngo.class)
                .returnResult()
                .getResponseBody();

        //WHEN
        assertNotNull(addNgo);
        Ngo actual = testClient.get()
                .uri("http://localhost:" + port + "/api/ngos/" + addNgo.getId())
                .exchange()
                .expectBody(Ngo.class)
                .returnResult()
                .getResponseBody();

        //THEN
        assertNotNull(actual);
        Ngo expected = Ngo.builder()
                .id(actual.getId())
                .name("New NGO")
                .email("test@mail.org")
                .url("https://test.com")
                .tagline("Test tagline")
                .description("Another NGO in the database")
                .sdg("15")
                .image("https://01.png")
                .city("Hamburg")
                .country("Germany")
                .region("Europe")
                .build();
        Assertions.assertEquals(expected, actual);
    }

    @Test
    void updateNgoById() {

        //GIVEN
        Ngo test = Ngo.builder().name("New NGO").email("test@mail.org").url("https://test.com").tagline("Test tagline").description("Another NGO in the database").sdg("15").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build();
        Ngo addedNgo = testClient.post()
                .uri("http://localhost:" + port + "/api/ngos")
                .bodyValue(test)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(Ngo.class)
                .returnResult()
                .getResponseBody();

        //WHEN
        assertNotNull(addedNgo);
        Ngo updatedNgo = Ngo.builder().id(addedNgo.getId()).name("Another fancy NGO").email("test@mail.org").url("https://test.com").tagline("Test tagline").description("Another NGO in the database").sdg("15").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build();
        Ngo actual = testClient.put()
                .uri("http://localhost:" + port + "/api/ngos")
                .bodyValue(updatedNgo)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(Ngo.class)
                .returnResult()
                .getResponseBody();

        //THEN
        Ngo expected = Ngo.builder().id(addedNgo.getId()).name("Another fancy NGO").email("test@mail.org").url("https://test.com").tagline("Test tagline").description("Another NGO in the database").sdg("15").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build();
        assertEquals(expected, actual);
    }

    @Test
    void deleteNgoById() {

        //GIVEN
        Ngo ngo = Ngo.builder().name("New NGO").email("test@mail.org").url("https://test.com").tagline("Test tagline").description("Another NGO in the database").sdg("15").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build();
        Ngo addedNgo = testClient.post()
                .uri("http://localhost:" + port + "/api/ngos")
                .bodyValue(ngo)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(Ngo.class)
                .returnResult()
                .getResponseBody();

        //WHEN
        assertNotNull(addedNgo);
        testClient.delete()
                .uri("http://localhost:" + port + "/api/ngos/" + addedNgo.getId())
                .exchange()

                //THEN
                .expectStatus().is2xxSuccessful();
    }
}