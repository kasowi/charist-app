package com.example.backend.controller;

import com.example.backend.dto.NgoDto;
import com.example.backend.model.Country;
import com.example.backend.model.Ngo;
import com.example.backend.service.NgoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/ngos")
public class NgoController {

    private final NgoService ngoService;

    @Autowired
    public NgoController(NgoService ngoService) {
        this.ngoService = ngoService;
    }

    @GetMapping
    public List<Ngo> getNgos() {
        return ngoService.getNgos();
    }

    @PostMapping
    public Ngo addNewNgo(@RequestBody NgoDto ngoDto) {
        return ngoService.addNewNgo(ngoDto);
    }

    @GetMapping("{id}")
    public Ngo getNgoById(@PathVariable String id) {
        return ngoService.getNgoById(id);
    }

    @PutMapping()
    public Ngo updateNgoById(@RequestBody Ngo updatedNgo) {
        return ngoService.updateNgoById(updatedNgo);
    }

    @DeleteMapping("{id}")
    public void deleteNgoById(@PathVariable String id) {
        ngoService.deleteNgoById(id);
    }

    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        return ngoService.getAllCountries();
    }

}

