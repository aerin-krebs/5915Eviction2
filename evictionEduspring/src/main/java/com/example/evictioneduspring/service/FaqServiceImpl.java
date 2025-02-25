package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.Faq;
import com.example.evictioneduspring.repositories.FaqRepository;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FaqServiceImpl implements FaqService {

    @Autowired
    private FaqRepository faqRepository;

    @Override
    Faq saveFaq(Faq faq) {
        return faqRepository.save(faq);
    }

    @Override
    List<Faq> fetchFaqList() {
        return (List<Faq>)faqRepository.findAll();
    }

    @Override
    Faq updateFaq(Faq faq, Long faq_id) {
        Faq faqDB = faqRepository.findById(faq_id).get();

        if (Objects.nonNull(faq.getQuestion() && !"".equalsIgnoreCase(faq.getQuestion()))) {
            faqDB.setQuestion(faq.getQuestion());
        }
        if (Objects.nonNull(faq.getAnswer() && !"".equalsIgnoreCase(faq.getAnswer()))) {
            faqDB.setAnswer(faq.getAnswer());
        }
       
        return faqRepository.save(faqDB);
    }

    @Override
    public void deleteFaqByID(Long faq_id) {
        faqRepository.deleteById(faq_id);
    }
}