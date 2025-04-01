package com.example.evictioneduspring.repositories;

import com.example.evictioneduspring.entities.NodeResource;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NodeResourceRepository extends CrudRepository<NodeResource, Long> {}
