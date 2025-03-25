package com.example.evictioneduspring.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.evictioneduspring.entities.Faq;
import com.example.evictioneduspring.service.FaqService;
import com.example.evictioneduspring.repositories.FaqRepository;
import com.example.evictioneduspring.entities.Resource;
import com.example.evictioneduspring.service.ResourceService;
import com.example.evictioneduspring.repositories.ResourceRepository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/faqs")
public class FAQController {

    @Autowired private FaqService faqService;

    private final FaqRepository faqRepository;

    public FAQController(FaqRepository faqRepository) {
        this.faqRepository = faqRepository;
    }

    @GetMapping
    public List<Faq> getFaqQuestionList() {
        return faqService.fetchFaqList();
    }
}