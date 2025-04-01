package com.example.evictioneduspring.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import com.example.evictioneduspring.enums.DisplayType;
import com.example.evictioneduspring.enums.Language;

@Entity
@Table(name = "Decision_Node")
public class DecisionNode {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long node_id;
    private boolean is_leaf;
    private String display_type;
    private String question;
    private String node_language;

    protected DecisionNode() {}

    public DecisionNode(long node_id_p, boolean is_leaf_p, String display_type_p, String node_language_p) {
        this.node_id = node_id_p;
        this.is_leaf = is_leaf_p;
        this.display_type = display_type_p;
        this.node_language = node_language_p;
    }

    @Override
    public String toString() {
        return String.format(
            "DecisionNode[nodeId=%d, isLeaf='%s', displayType='%s', question='%s', language='%s',]",
            node_id, String.valueOf(is_leaf), display_type, question, node_language
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

    public String getDisplayType() {
        return display_type;
    }

    public void setDisplayType(String new_display_type) {
        this.display_type = new_display_type;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String new_question) {
        this.question = new_question;
    }

    public String getNodeLanguage() {
        return node_language;
    }

    public void setNodeLanguage(String new_node_language) {
        this.node_language = new_node_language;
    }
}