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

    public Ngo updateNgoById (String id, NgoDto ngoDto) {
        Ngo updatedNgo = ngoRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("NGO with ID " + id + " was not found!"));
        updatedNgo.setName(ngoDto.getName());
        updatedNgo.setEmail(ngoDto.getEmail());
        updatedNgo.setUrl(ngoDto.getUrl());
        updatedNgo.setTagline(ngoDto.getTagline());
        updatedNgo.setDescription(ngoDto.getDescription());
        updatedNgo.setSdg(ngoDto.getSdg());
        updatedNgo.setImage(ngoDto.getImage());
        updatedNgo.setCity(ngoDto.getCity());
        updatedNgo.setCountry(ngoDto.getCountry());
        updatedNgo.setRegion(ngoDto.getRegion());
        return ngoRepo.save(updatedNgo);
    }

    public void deleteNgoById(String id) {
        ngoRepo.deleteById(id);
    }
}

