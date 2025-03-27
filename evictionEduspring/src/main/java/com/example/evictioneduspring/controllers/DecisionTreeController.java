package com.example.evictioneduspring.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.evictioneduspring.entities.DecisionNode;
import com.example.evictioneduspring.service.DecisionNodeService;
import com.example.evictioneduspring.repositories.DecisionNodeRepository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tree")
public class DecisionTreeController {

    @Autowired private DecisionNodeService decisionNodeService;

    private final DecisionNodeRepository decisionNodeRepository;

    public DecisionTreeController(DecisionNodeRepository decisionNodeRepository) {
        this.decisionNodeRepository = decisionNodeRepository;
    }

    @GetMapping("/{id}")
    public DecisionNode getDecisionTreeNodeById(@PathVariable Long id) {
        return decisionNodeRepository.findById(id).orElseThrow(RuntimeException::new);
    }
}