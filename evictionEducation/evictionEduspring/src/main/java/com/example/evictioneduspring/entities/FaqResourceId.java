package com.example.evictioneduspring.entities;

import java.io.Serializable;
import java.util.Objects;
import jakarta.persistence.Embeddable;

@Embeddable
public class FaqResourceId implements Serializable {
    private long faq_id;
    private long resource_id;

    // Default constructor (required for JPA)
    public FaqResourceId() {}

    public FaqResourceId(long faq_id, long resource_id) {
        this.faq_id = faq_id;
        this.resource_id = resource_id;
    }

    public long getFaqId() {
        return faq_id;
    }

    public long getResourceId() {
        return resource_id;
    }

    // Ensure correct equality checks
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FaqResourceId that = (FaqResourceId) o;
        return faq_id == that.faq_id && resource_id == that.resource_id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(faq_id, resource_id);
    }
}
