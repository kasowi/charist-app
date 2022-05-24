package com.example.backend.service;

import com.example.backend.dto.CreateNgoDto;
import com.example.backend.model.Ngo;
import com.example.backend.repository.NgoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public Ngo addNewNgo(CreateNgoDto ngo) {
        Ngo newNgo = new Ngo();
        newNgo.setName(ngo.getName());
        newNgo.setId(ngo.getId());
        newNgo.setSdg(ngo.getSdg());
        newNgo.setCity(ngo.getCity());
        newNgo.setCountry(ngo.getCountry());
        return ngoRepo.insert(newNgo);
    }

    public void deleteNgoById(String id) {
        ngoRepo.deleteById(id);
    }
}
