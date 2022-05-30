package com.example.backend.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "ngos")
public class Ngo {

    @Id
    private String id;
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

