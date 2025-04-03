package com.example.evictioneduspring.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "FAQ_Resource")
public class FaqResource {

    @EmbeddedId
    private FaqResourceId id;  // Use composite key

    protected FaqResource() {}

    public FaqResource(long faq_id, long resource_id) {
        this.id = new FaqResourceId(faq_id, resource_id);
    }

    public long getFaqId() {
        return id.getFaqId();
    }

    public long getResourceId() {
        return id.getResourceId();
    }

    @Override
    public String toString() {
        return String.format("FaqResource[faqId=%d, resourceId=%d]", id.getFaqId(), id.getResourceId());
    }
}