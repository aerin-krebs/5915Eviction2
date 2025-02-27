package com.example.evictioneduspring.repositories;

import com.example.evictioneduspring.entities.DecisionNode;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DecisionNodeRepository extends CrudRepository<DecisionNode, Long> {}
