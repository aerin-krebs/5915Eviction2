package com.example.evictioneduspring.repositories;

import com.example.evictioneduspring.entities.Faq;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FaqRepository extends CrudRepository<Faq, Long> {}
