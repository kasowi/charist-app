package com.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NgoDto {

    private String name;
    private String email;
    private String url;
    private String tagline;
    private String description;
    private String sdg;
    private String image;
    private String city;
    private String country;
    private String region;

}

