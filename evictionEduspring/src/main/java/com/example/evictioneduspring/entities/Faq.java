package com.example.evictioneduspring.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
// @Table(name = "faq")
public class Faq {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long faq_id;
    private String question;
    private String answer;

    protected Faq() {}

    public Faq(long faq_id_p, String question_p, String answer_p) {
        this.faq_id = faq_id_p;
        this.question = question_p;
        this.answer = answer_p;
    }

    @Override
    public String toString() {
        return String.format(
            "Faq[faqId=%d, question='%s', answer='%s']",
            faq_id, question, answer
        );
    }

    public long getFaqId() {
        return faq_id;
    }

    public void setFaqId(long new_faq_id) {
        // INVALID - PRIMARY KEY
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String new_question) {
        this.question = new_question;
    }

    public String getAnswer() {
        return answer;
    }

    public void set(String new_answer) {
        this.answer = new_answer;
    }

}