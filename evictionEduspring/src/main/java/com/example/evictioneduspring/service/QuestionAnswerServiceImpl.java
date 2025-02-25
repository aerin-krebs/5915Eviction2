package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.QuestionAnswer;
import com.example.evictioneduspring.repositories.QuestionAnswerRepository;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionAnswerServiceImpl implements QuestionAnswerService {

    @Autowired
    private QuestionAnswerRepository questionAnswerRepository;

    @Override
    QuestionAnswer saveQuestionAnswer(QuestionAnswer questionAnswer) {
        return questionAnswerRepository.save(questionAnswer);
    }

    @Override
    List<QuestionAnswer> fetchQuestionAnswerList() {
        return (List<QuestionAnswer>)questionAnswerRepository.findAll();
    }

    @Override
    QuestionAnswer updateQuestionAnswer(QuestionAnswer questionAnswer, Long questionAnswer_id) {
        QuestionAnswer questionAnswerDB = questionAnswerRepository.findById(questionAnswer_id).get();

        if (Objects.nonNull(questionAnswer.getChildNode() && !"".equalsIgnoreCase(questionAnswer.getChildNode()))) {
            questionAnswerDB.setChildNode(questionAnswer.getChildNode());
        }
       
        return questionAnswerRepository.save(questionAnswerDB);
    }

    @Override
    public void deleteQuestionAnswerByID(Long questionAnswer_id) {
        questionAnswerRepository.deleteById(questionAnswer_id);
    }
}