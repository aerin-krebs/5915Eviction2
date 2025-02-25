package com.example.evictioneduspring.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Table(name = "FAQ_Resource")
public class FaqResource {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long faq_id;
    private long resource_id;

    protected FaqResource() {}

    public FaqResource(long faq_id_p, long resource_id_p) {
        this.faq_id = faq_id_p;
        this.resource_id = resource_id_p;
    }

    @Override
    public String toString() {
        return String.format(
            "FaqResource[faqId=%d, resourceId=%d]",
            faq_id, resource_id
        );
    }

    public long getFaqId() {
        return faq_id;
    }

    public void setFaqId(long new_node_id) {
        // INVALID - PRIMARY KEY

    }

    public long getResourceId() {
        return resource_id;
    }

    public void setResourceId(long new_resource_id) {
        // INVALID - PRIMARY KEY
    }


}