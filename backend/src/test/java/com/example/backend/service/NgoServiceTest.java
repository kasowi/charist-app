package com.example.backend.service;

import com.example.backend.dto.NgoDto;
import com.example.backend.model.Ngo;
import com.example.backend.repository.NgoRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class NgoServiceTest {

    private final NgoRepo ngoRepo = mock(NgoRepo.class);
    private final NgoService ngoService = new NgoService(ngoRepo);

    @Test
    void getNgos() {

        //GIVEN
        Ngo ngo = Ngo.builder().name("New NGO").email("test@mail.org").url("https://test.com").tagline("Test tagline").description("Another NGO in the database").sdg("15").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build();
        when(ngoRepo.findAll()).thenReturn(List.of(ngo));

        //WHEN
        List<Ngo> actual = ngoService.getNgos();

        //THEN
        List<Ngo> expected = List.of(Ngo.builder().name("New NGO").email("test@mail.org").url("https://test.com").tagline("Test tagline").description("Another NGO in the database").sdg("15").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build());

        verify(ngoRepo).findAll();
        assertEquals(expected, actual);

    }

    @Test
    void addNewNgo() {

        //GIVEN
        Ngo newNgo = Ngo.builder().name("New NGO 2").email("test2@mail.org").url("https://test2.com").tagline("Test 2 tagline").description("Another another NGO in the database").sdg("10").image("https://02.png").city("Hamburg").country("Germany").region("Europe").build();
        when(ngoRepo.insert(newNgo)).thenReturn(Ngo.builder().id("fakeId22").name("New NGO 2").email("test2@mail.org").url("https://test2.com").tagline("Test 2 tagline").description("Another another NGO in the database").sdg("10").image("https://02.png").city("Hamburg").country("Germany").region("Europe").build());

        //WHEN
        NgoDto totallyNewNgo = NgoDto.builder().name("New NGO 2").email("test2@mail.org").url("https://test2.com").tagline("Test 2 tagline").description("Another another NGO in the database").sdg("10").image("https://02.png").city("Hamburg").country("Germany").region("Europe").build();
        Ngo actual = ngoService.addNewNgo(totallyNewNgo);

        //THEN
        Ngo expected = Ngo.builder().id("fakeId22").name("New NGO 2").email("test2@mail.org").url("https://test2.com").tagline("Test 2 tagline").description("Another another NGO in the database").sdg("10").image("https://02.png").city("Hamburg").country("Germany").region("Europe").build();
        verify(ngoRepo).insert(newNgo);
        assertEquals(expected, actual);

    }

    @Test
    void getNgoById_whenIdIsValid() {

        //GIVEN
        when(ngoRepo.findById("22")).thenReturn(
                Optional.of(Ngo.builder().id("22").name("Another NGO").email("test@mail.org").url("https://test.com").tagline("Test tagline").description("Another NGO in the database").sdg("15").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build()));

        //WHEN
        Ngo actual = ngoService.getNgoById("22");

        //THEN
        Ngo expected = Ngo.builder().id("22").name("Another NGO").email("test@mail.org").url("https://test.com").tagline("Test tagline").description("Another NGO in the database").sdg("15").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build();
        verify(ngoRepo).findById("22");
        assertEquals(expected, actual);

    }

    @Test
    void getNgoById_ifIdNotValid_throwException() {

        //GIVEN
        when(ngoRepo.findById("22")).thenReturn(
                Optional.empty());

        //WHEN //THEN
        assertThrows(NoSuchElementException.class, () -> ngoService.getNgoById("22"));
        verify(ngoRepo).findById("22");

    }

    @Test
    void updateNgoById() {

        //GIVEN
        Ngo ngo = Ngo.builder().name("One More NGO").email("test@mail.org").url("https://test.com").tagline("Test tagline").description("Another NGO in the database").sdg("15").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build();
        when(ngoRepo.save(ngo)).thenReturn(Ngo.builder().id("1234").name("Fancy Name NGO").email("test@mail.org").url("https://test-more.com").tagline("Test tagline").description("Another NGO in the database").sdg("12").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build());

        //WHEN
        Ngo actual = ngoService.updateNgoById(ngo);

        //THEN
        Ngo expected = Ngo.builder().id("1234").name("Fancy Name NGO").email("test@mail.org").url("https://test-more.com").tagline("Test tagline").description("Another NGO in the database").sdg("12").image("https://01.png").city("Hamburg").country("Germany").region("Europe").build();
        assertEquals(expected, actual);

    }

    @Test
    void deleteNgoById() {

        //WHEN
        ngoService.deleteNgoById("22");

        //THEN
        verify(ngoRepo).deleteById("22");

    }
}