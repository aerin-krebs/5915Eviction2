package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.Resource;

import java.util.List;

public interface ResourceService {

    Resource saveResource(Resource resource);

    List<Resource> fetchResourceList();

    Resource updateResource(Resource resource, Long resource_id);

    void deleteResourceByID(Long resource_id);
}