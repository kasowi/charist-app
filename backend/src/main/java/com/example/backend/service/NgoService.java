package com.example.backend.service;

import com.example.backend.dto.NgoDto;
import com.example.backend.model.Ngo;
import com.example.backend.repository.NgoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class NgoService {

    private final NgoRepo ngoRepo;
//  private final CountriesApiService countriesApiService;

    @Autowired
    public NgoService(NgoRepo ngoRepo) {
        this.ngoRepo = ngoRepo;
    }

    public List<Ngo> getNgos() {
        return ngoRepo.findAll();
    }

    public Ngo addNewNgo(NgoDto ngoDto) {
        Ngo newNgo = new Ngo();
        newNgo.setName(ngoDto.getName());
        newNgo.setEmail(ngoDto.getEmail());
        newNgo.setUrl(ngoDto.getUrl());
        newNgo.setTagline(ngoDto.getTagline());
        newNgo.setDescription(ngoDto.getDescription());
        newNgo.setSdg(ngoDto.getSdg());
        newNgo.setImage(ngoDto.getImage());
        newNgo.setCity(ngoDto.getCity());
        newNgo.setCountry(ngoDto.getCountry());
        newNgo.setRegion(ngoDto.getRegion());
        return ngoRepo.insert(newNgo);
    }

    public Ngo getNgoById(String id) {
        return ngoRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("NGO with ID " + id + " not found"));
    }

    public Ngo updateNgoById(Ngo updatedNgo) {
        return ngoRepo.save(updatedNgo);
    }

    public void deleteNgoById(String id) {
        ngoRepo.deleteById(id);
    }

    /*
    public List<Country> getAllCountries() {
        return countriesApiService.retrieveCountries();
    }
    */

}

