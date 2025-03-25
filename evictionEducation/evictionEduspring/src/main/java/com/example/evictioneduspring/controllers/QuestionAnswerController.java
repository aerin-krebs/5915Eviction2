package com.example.evictioneduspring.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.evictioneduspring.entities.QuestionAnswer;
import com.example.evictioneduspring.repositories.QuestionAnswerRepository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/questions")
public class QuestionAnswerController {

    private final QuestionAnswerRepository questionAnswerRepository;

    public QuestionAnswerController(QuestionAnswerRepository questionAnswerRepository) {
        this.questionAnswerRepository = questionAnswerRepository;
    }

    @GetMapping("/{id}") // 
    public QuestionAnswer getQuestionAnswerById(@PathVariable Long id) {
        return questionAnswerRepository.findById(id).orElseThrow(RuntimeException::new);
    }
}