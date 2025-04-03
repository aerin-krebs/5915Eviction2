package com.example.evictioneduspring.controllers;

import com.example.evictioneduspring.entities.QuestionAnswer;
import com.example.evictioneduspring.repositories.QuestionAnswerRepository;
import com.example.evictioneduspring.service.FaqService;
import com.example.evictioneduspring.service.QuestionAnswerService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(origins = "http://localhost:3000")  // Allow frontend access
public class QuestionAnswerController {

    @Autowired private QuestionAnswerService questionAnswerService;

    private final QuestionAnswerRepository questionAnswerRepository;

    public QuestionAnswerController(QuestionAnswerRepository questionAnswerRepository) {
        this.questionAnswerRepository = questionAnswerRepository;
    }

    @GetMapping("/qa-list") 
    public List<QuestionAnswer> getQuestionAnswerList() {
        return questionAnswerService.fetchQuestionAnswerList();
    }
}