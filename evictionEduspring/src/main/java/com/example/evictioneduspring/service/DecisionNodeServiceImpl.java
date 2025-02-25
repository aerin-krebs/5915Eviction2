package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.DecisionNode;
import com.example.evictioneduspring.repositories.DecisionNodeRepository;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DecisionNodeServiceImpl implements DecisionNodeService {

    @Autowired
    private DecisionNodeRepository decisionNodeRepository;

    @Override
    public DecisionNode saveDecisionNode(DecisionNode decisionNode) {
        return decisionNodeRepository.save(decisionNode);
    }

    @Override
    public List<DecisionNode> fetchDecisionNodeList() {
        return (List<DecisionNode>)decisionNodeRepository.findAll();
    }

    @Override
    public DecisionNode updateDecisionNode(DecisionNode decisionNode, Long decisionNode_id) {
        DecisionNode decisionNodeDB = decisionNodeRepository.findById(decisionNode_id).get();

        if (Objects.nonNull(decisionNode.getIsLeaf())) {
            decisionNodeDB.setIsLeaf(decisionNode.getIsLeaf());
        }
        if (Objects.nonNull(decisionNode.getDisplayType()) && !"".equalsIgnoreCase(decisionNode.getDisplayType())) {
            decisionNodeDB.setDisplayType(decisionNode.getDisplayType());
        }
        if (Objects.nonNull(decisionNode.getQuestion()) && !"".equalsIgnoreCase(decisionNode.getQuestion())) {
            decisionNodeDB.setQuestion(decisionNode.getQuestion());
        }
        if (Objects.nonNull(decisionNode.getNodeLanguage()) && !"".equalsIgnoreCase(decisionNode.getNodeLanguage())) {
            decisionNodeDB.setNodeLanguage(decisionNode.getNodeLanguage());
        }
       
        return decisionNodeRepository.save(decisionNodeDB);
    }

    @Override
    public void deleteDecisionNodeByID(Long decisionNode_id) {
        decisionNodeRepository.deleteById(decisionNode_id);
    }
}