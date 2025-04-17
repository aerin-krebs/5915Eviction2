package com.example.evictioneduspring.controllers;

import com.example.evictioneduspring.entities.Resource;
import com.example.evictioneduspring.entities.FaqResource;
import com.example.evictioneduspring.entities.NodeResource;
import com.example.evictioneduspring.service.ResourceService;
import com.example.evictioneduspring.service.FaqResourceService;
import com.example.evictioneduspring.service.NodeResourceService;
import com.example.evictioneduspring.repositories.FaqResourceRepository;
import com.example.evictioneduspring.repositories.NodeResourceRepository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {

    @Autowired private ResourceService resourceService;
    @Autowired private FaqResourceService faqResourceService;
    @Autowired private NodeResourceService nodeResourceService;

    private final NodeResourceRepository nodeResourceRepository;
    private final FaqResourceRepository faqResourceRepository;

    public ResourceController(NodeResourceRepository nodeResourceRepository, FaqResourceRepository faqResourceRepository) {
        this.nodeResourceRepository = nodeResourceRepository;
        this.faqResourceRepository = faqResourceRepository;
    }

    @GetMapping
    public List<Resource> getResources() {
        return resourceService.fetchResourceList();
    }

    @GetMapping("/node/{node_id}")
    public NodeResource getNodeResourceById(@PathVariable Long node_id) {
        return nodeResourceRepository.findById(node_id).orElseThrow(RuntimeException::new);
    }

    @GetMapping("/faq/{faq_id}")
    public FaqResource getFaqResourceById(@PathVariable Long faq_id) {
        return faqResourceRepository.findById(faq_id).orElseThrow(RuntimeException::new);
    }

    @GetMapping("/faq-list")
    public List<FaqResource> getFaqResourceList() {
        return faqResourceService.fetchFaqResourceList(); 
    }

    @GetMapping("/node-list")
    public List<NodeResource> getNodeResourceList() {
        return nodeResourceService.fetchNodeResourceList(); 
    }
}