package com.example.evictioneduspring.entities;

import java.io.Serializable;
import java.util.Objects;
import jakarta.persistence.Embeddable;

@Embeddable
public class QuestionAnswerKey implements Serializable {
    private long parent_node;
    private String answer;

    // Default constructor (required for JPA)
    public QuestionAnswerKey() {}

    public QuestionAnswerKey(long parent_node, String answer) {
        this.parent_node = parent_node;
        this.answer = answer;
    }

    public long getParentNode() {
        return parent_node;
    }

    public String getAnswer() {
        return answer;
    }

    // Ensure correct equality checks
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        QuestionAnswerKey that = (QuestionAnswerKey) o;
        return parent_node == that.parent_node && answer == that.answer;
    }

    @Override
    public int hashCode() {
        return Objects.hash(parent_node, answer);
    }
}
