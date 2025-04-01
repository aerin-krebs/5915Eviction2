package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.FaqResource;

import java.util.List;

public interface FaqResourceService {

    FaqResource saveFaqResource(FaqResource faqResource);

    List<FaqResource> fetchFaqResourceList();

    FaqResource updateFaqResource(FaqResource faqResource, Long faqResource_id);

    void deleteFaqResourceByID(Long faqResource_id);
}