package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.DecisionNode;

import java.util.List;

public interface DecisionNodeService {

    DecisionNode saveDecisionNode(DecisionNode decisionNode);

    List<DecisionNode> fetchDecisionNodeList();

    DecisionNode updateDecisionNode(DecisionNode decisionNode, Long node_id);

    void deleteByNodeID(Long node_id);
}