package com.example.evictioneduspring.assist;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import com.example.evictioneduspring.assist.DisplayType;
import com.example.evictioneduspring.assist.Language;

@Entity
// @Table(name = "decision_node")
public class DecisionNode {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long node_id;
    private boolean is_leaf;
    private DisplayType display_type;
    private String question;
    private Language node_language;

    protected DecisionNode() {}

    public DecisionNode(long node_id_p, boolean is_leaf_p, DisplayType display_type_p, Language node_language_p) {
        this.node_id = node_id_p;
        this.is_leaf = is_leaf_p;
        this.display_type = display_type_p;
        this.node_language = node_language_p;
    }

    @Override
    public String toString() {
        return String.format(
            "DecisionNode[nodeId=%d, isLeaf='%s', displayType='%s',
            question='%s', language='%s',]",
            node_id, String.valueOf(is_leaf), display_type.toString(),
            question, language.toString()
        );
    }

    public long getNodeId() {
        return this.node_id;
    }

    public void setNodeId(long new_node_id) {
        // INVALID - PRIMARY KEY
    }

    public boolean getIsLeaf() {
        return is_leaf;
    }

    public void setIsLeaf(boolean new_is_leaf) {
        this.is_leaf = new_is_leaf;
    }

    public DisplayType getDisplayType() {
        return display_type;
    }

    public void setDisplayType(DisplayType new_display_type) {
        this.display_type = new_display_type;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String new_question) {
        this.question = new_question;
    }

    public Language getNodeLanguage() {
        return node_language;
    }

    public void setNodeLanguage(Language new_node_language) {
        this.node_language = new_node_language;
    }
}