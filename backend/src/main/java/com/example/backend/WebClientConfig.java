package com.example.backend;

import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.WebClient;

public class WebClientConfig {

    @Bean
    public WebClient getWebClient(){
        return WebClient.create();
    }
}
