package com.example.evictioneduspring.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Question_Answer")
public class QuestionAnswer {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long parent_node;
    private long child_node;
    private String answer;

    protected QuestionAnswer() {}

    public QuestionAnswer(long parent_node_p, String answer_p) {
        this.parent_node = parent_node_p;
        this.answer = answer_p;
    }

    @Override
    public String toString() {
        return String.format(
            "QuestionAnswer[parentNode=%d, childNode=%d, answer='%s']",
            parent_node, child_node, answer
        );
    }

    public long getParentNode() {
        return parent_node;
    }

    public void setParentNode(long new_parent_node) {
        // INVALID - PRIMARY KEY
    }

    public long getChildNode() {
        return child_node;
    }

    public void setChildNode(long new_child_node) {
        this.child_node = new_child_node;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String new_answer) {
        // INVALID - PRIMARY KEY
    }
}