package com.example.backend.controller;

import com.example.backend.dto.NgoDto;
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

    @PutMapping(path="{id}")
    public Ngo updateNgoById(@PathVariable String id, @RequestBody NgoDto ngoDto) {
        return ngoService.updateNgoById(id, ngoDto);
    }

    @DeleteMapping(path="{id}")
    public void deleteNgoById(@PathVariable String id) {
        ngoService.deleteNgoById(id);
    }
}
