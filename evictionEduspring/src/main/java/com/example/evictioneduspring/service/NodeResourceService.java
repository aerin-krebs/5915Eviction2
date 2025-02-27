package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.NodeResource;

import java.util.List;

public interface NodeResourceService {

    NodeResource saveNodeResource(NodeResource nodeResource);

    List<NodeResource> fetchNodeResourceList();

    NodeResource updateNodeResource(NodeResource nodeResource, Long nodeResource_id);

    void deleteNodeResourceByID(Long nodeResource_id);
}