package com.example.evictioneduspring;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class MessageController {


    @GetMapping("/resource-finder")
    public String getResource() {
        return "Hello, World!";
    }

    @GetMapping("/faq")
    public String getFaq() {
        return "Hello, World!";
    }

    @GetMapping("/chat")
    public String getChat() {
        return "Hello, World!";
    }
}