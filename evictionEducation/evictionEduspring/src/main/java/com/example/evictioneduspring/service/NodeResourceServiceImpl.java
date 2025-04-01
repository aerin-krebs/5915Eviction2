package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.NodeResource;
import com.example.evictioneduspring.repositories.NodeResourceRepository;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NodeResourceServiceImpl implements NodeResourceService {

    @Autowired
    private NodeResourceRepository nodeResourceRepository;

    @Override
    public NodeResource saveNodeResource(NodeResource nodeResource) {
        return nodeResourceRepository.save(nodeResource);
    }

    @Override
    public List<NodeResource> fetchNodeResourceList() {
        return (List<NodeResource>)nodeResourceRepository.findAll();
    }

    @Override
    public NodeResource updateNodeResource(NodeResource nodeResource, Long nodeResource_id) {
        NodeResource nodeResourceDB = nodeResourceRepository.findById(nodeResource_id).get();

        // Cannot update - only contains primary keys
       
        return nodeResourceRepository.save(nodeResourceDB);
    }

    @Override
    public void deleteNodeResourceByID(Long nodeResource_id) {
        nodeResourceRepository.deleteById(nodeResource_id);
    }
}