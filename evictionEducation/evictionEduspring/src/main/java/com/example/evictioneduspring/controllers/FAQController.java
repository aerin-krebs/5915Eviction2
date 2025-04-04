package com.example.evictioneduspring.controllers;

import com.example.evictioneduspring.entities.Faq;
import com.example.evictioneduspring.service.FaqService;
import com.example.evictioneduspring.repositories.FaqRepository;
import com.example.evictioneduspring.entities.FaqResource;
import com.example.evictioneduspring.service.FaqResourceService;
import com.example.evictioneduspring.repositories.FaqResourceRepository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/faqs")
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