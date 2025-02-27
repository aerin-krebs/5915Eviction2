package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.FaqResource;
import com.example.evictioneduspring.repositories.FaqResourceRepository;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FaqResourceServiceImpl implements FaqResourceService {

    @Autowired
    private FaqResourceRepository faqResourceRepository;

    @Override
    public FaqResource saveFaqResource(FaqResource faqResource) {
        return faqResourceRepository.save(faqResource);
    }

    @Override
    public List<FaqResource> fetchFaqResourceList() {
        return (List<FaqResource>)faqResourceRepository.findAll();
    }

    @Override
    public FaqResource updateFaqResource(FaqResource faqResource, Long faqResource_id) {
        FaqResource faqResourceDB = faqResourceRepository.findById(faqResource_id).get();

        // Cannot update - only contains primary keys
       
        return faqResourceRepository.save(faqResourceDB);
    }

    @Override
    public void deleteFaqResourceByID(Long faqResource_id) {
        faqResourceRepository.deleteById(faqResource_id);
    }
}