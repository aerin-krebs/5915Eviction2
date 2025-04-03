package com.example.evictioneduspring.controllers;

import com.example.evictioneduspring.entities.DecisionNode;
import com.example.evictioneduspring.service.DecisionNodeService;
import com.example.evictioneduspring.repositories.DecisionNodeRepository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tree")
@CrossOrigin(origins = "http://localhost:3000")  // Allow frontend access
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