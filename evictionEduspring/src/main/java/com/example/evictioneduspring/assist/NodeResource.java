package com.example.evictioneduspring.assist;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
// @Table(name = "node-resource")
public class NodeResource {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long node_id;
    private long resource_id;

    protected NodeResource() {}

    public NodeResource(long node_id_p, long resource_id_p) {
        this.node_id = node_id_p;
        this.resource_id = resource_id_p;
    }

    @Override
    public String toString() {
        return String.format(
            "NodeResource[nodeId=%d, resourceId=%d]",
            node_id, resource_id
        );
    }

    public long getNodeId() {
        return node_id;
    }

    public void setNodeId(long new_node_id) {
        // INVALID - PRIMARY KEY

    }

    public long getResourceId() {
        return resource_id;
    }

    public void setResourceId(long new_resource_id) {
        // INVALID - PRIMARY KEY
    }


}