package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.QuestionAnswer;

import java.util.List;

public interface QuestionAnswerService {

    QuestionAnswer saveQuestionAnswer(QuestionAnswer questionAnswer);

    List<QuestionAnswer> fetchQuestionAnswerList();

    QuestionAnswer updateQuestionAnswer(QuestionAnswer questionAnswer, Long questionAnswer_id);

    void deleteQuestionAnswerByID(Long questionAnswer_id);
}