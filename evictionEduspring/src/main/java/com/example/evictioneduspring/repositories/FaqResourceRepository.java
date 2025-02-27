package com.example.evictioneduspring.repositories;

import com.example.evictioneduspring.entities.FaqResource;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FaqResourceRepository extends CrudRepository<FaqResource, Long> {}
