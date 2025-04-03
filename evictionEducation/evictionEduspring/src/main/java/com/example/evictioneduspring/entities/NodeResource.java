package com.example.evictioneduspring.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Node_Resource")
public class NodeResource {

    @EmbeddedId
    private NodeResourceId id;  // Use composite key

    protected NodeResource() {}

    public NodeResource(long node_id, long resource_id) {
        this.id = new NodeResourceId(node_id, resource_id);
    }

    public long getNodeId() {
        return id.getNodeId();
    }

    public long getResourceId() {
        return id.getResourceId();
    }

    @Override
    public String toString() {
        return String.format("NodeResource[NodeId=%d, resourceId=%d]", id.getNodeId(), id.getResourceId());
    }
}