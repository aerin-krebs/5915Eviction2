package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.Faq;

import java.util.List;

public interface FaqService {

    Faq saveFaq(Faq faq);

    List<Faq> fetchFaqList();

    Faq updateFaq(Faq faq, Long faq_id);

    void deleteFaqByID(Long faq_id);
}