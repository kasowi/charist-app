package com.example.backend.repository;

import com.example.backend.model.Ngo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface NgoRepo extends MongoRepository<Ngo, String> {

}
