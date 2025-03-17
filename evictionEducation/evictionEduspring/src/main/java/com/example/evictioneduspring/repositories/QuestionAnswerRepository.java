package com.example.evictioneduspring.repositories;

import com.example.evictioneduspring.entities.QuestionAnswer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionAnswerRepository extends CrudRepository<QuestionAnswer, Long> {}
