package com.example.evictioneduspring.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.example.evictioneduspring.entities.User;
import com.example.evictioneduspring.service.UserService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class MessageController { // This is a test controller to make sure we can acess endpoints

    @Autowired private UserService userService;


    @GetMapping("/try-user")
    public List<User> getResource() {
        return userService.fetchUserList();
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