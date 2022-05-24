package com.example.backend.controller;

import com.example.backend.dto.CreateNgoDto;
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
    public Ngo addNewNgo (@RequestBody CreateNgoDto newNgo) {
        return ngoService.addNewNgo(newNgo);
    }

    @DeleteMapping(path="{id}")
    public void deleteNgoById (@PathVariable String id) {
        ngoService.deleteNgoById(id);
    }
}
