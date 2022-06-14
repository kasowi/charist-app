package com.example.backend.security.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.time.Duration;
import java.time.Instant;
import java.util.HashMap;

@Service
public class JwtUtilService {

    @Value("${kasowi.charist-app.jwt.secret}")
    private String JWT_SECRET;

    public String createToken(String username) {

        return Jwts.builder()
                .setClaims(new HashMap<>())
                .setSubject(username)
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().plus(Duration.ofHours(2))))
                .signWith(SignatureAlgorithm.HS256, JWT_SECRET)
                .compact();
    }

}
