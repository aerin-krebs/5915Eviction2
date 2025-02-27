package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.Resource;
import com.example.evictioneduspring.repositories.ResourceRepository;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResourceServiceImpl implements ResourceService {

    @Autowired
    private ResourceRepository resourceRepository;

    @Override
    public Resource saveResource(Resource resource) {
        return resourceRepository.save(resource);
    }

    @Override
    public List<Resource> fetchResourceList() {
        return (List<Resource>)resourceRepository.findAll();
    }

    @Override
    public Resource updateResource(Resource resource, Long resource_id) {
        Resource resourceDB = resourceRepository.findById(resource_id).get();

        if (Objects.nonNull(resource.getResourceCategory()) && !"".equalsIgnoreCase(resource.getResourceCategory())) {
            resourceDB.setResourceCategory(resource.getResourceCategory());
        }
        if (Objects.nonNull(resource.getTitle()) && !"".equalsIgnoreCase(resource.getTitle())) {
            resourceDB.setTitle(resource.getTitle());
        }
        if (Objects.nonNull(resource.getSummary()) && !"".equalsIgnoreCase(resource.getSummary())) {
            resourceDB.setSummary(resource.getSummary());
        }
        if (Objects.nonNull(resource.getUrl()) && !"".equalsIgnoreCase(resource.getUrl())) {
            resourceDB.setUrl(resource.getUrl());
        }
        if (Objects.nonNull(resource.getDateUpdated())) {
            resourceDB.setDateUpdated(resource.getDateUpdated());
        }
        if (Objects.nonNull(resource.getCreator())) {
            resourceDB.setCreator(resource.getCreator());
        }
       
        return resourceRepository.save(resourceDB);
    }

    @Override
    public void deleteResourceByID(Long resource_id) {
        resourceRepository.deleteById(resource_id);
    }
}