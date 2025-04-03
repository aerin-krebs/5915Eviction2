package com.example.evictioneduspring.entities;

import java.io.Serializable;
import java.util.Objects;
import jakarta.persistence.Embeddable;

@Embeddable
public class NodeResourceId implements Serializable {
    private long node_id;
    private long resource_id;

    // Default constructor (required for JPA)
    public NodeResourceId() {}

    public NodeResourceId(long node_id, long resource_id) {
        this.node_id = node_id;
        this.resource_id = resource_id;
    }

    public long getNodeId() {
        return node_id;
    }

    public long getResourceId() {
        return resource_id;
    }

    // Ensure correct equality checks
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        NodeResourceId that = (NodeResourceId) o;
        return node_id == that.node_id && resource_id == that.resource_id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(node_id, resource_id);
    }
}
