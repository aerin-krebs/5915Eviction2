package com.example.evictioneduspring.entities;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Question_Answer")
public class QuestionAnswer {

    @EmbeddedId
    private QuestionAnswerKey key;  // Use composite key
    private long childNode;

    protected QuestionAnswer() {}

    public QuestionAnswer(long parent_node_p, long child_node_p, String answer_p) {
        key = new QuestionAnswerKey(parent_node_p, answer_p);
        childNode = child_node_p;
    }

    @Override
    public String toString() {
        return String.format(
            "QuestionAnswer[parentNode=%d, childNode=%d, answer='%s']",
            key.getParentNode(), childNode, key.getAnswer()
        );
    }

    public long getParentNode() {
        return key.getParentNode();
    }

    public void setParentNode(long new_parent_node) {
        // INVALID - PRIMARY KEY
    }

    public long getChildNode() {
        return childNode;
    }

    public void setChildNode(long new_child_node) {
        // INVALID - PRIMARY KEY
    }

    public String getAnswer() {
        return key.getAnswer();
    }

    public void setAnswer(String new_answer) {
        // INVALID - PRIMARY KEY
    }
}