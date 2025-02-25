package com.example.evictioneduspring.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

import com.example.evictioneduspring.enums.ResourceCategory;

@Entity
@Table(name = "Resources")
public class Resource {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long resource_id;
    private String resource_category;
    private String title;
    private String summary;
    private String url;
    private Date date_updated;
    private long creator;

    protected Resource() {}

    public Resource(long resource_id_p, String resource_category_p, String title_p, String url_p, Date date_updated_p) {
        this.resource_id = resource_id_p;
        this.resource_category = resource_category_p;
        this.title = title_p;
        this.url = url_p;
        this.date_updated = date_updated_p;
    }

    @Override
    public String toString() {
        return String.format(
            "Resource[resourceId=%d, resourceCategory='%s', title='%s', summary='%s', url='%s', dateUpdated='%s', creatorId=%d]",
            resource_id, resource_category, title, summary, url, date_updated.toString(), creator
        );
    }

    public long getResourceId () {
        return resource_id;
    }

    public void setResourceId(long new_resource_id) {
        // INVALID - PRIMARY KEY
    }

    public String getResourceCategory() {
        return resource_category;
    }

    public void setResourceCategory(String new_resource_category) {
        this.resource_category = new_resource_category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String new_title) {
        this.title = new_title;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String new_summary) {
        this.summary = new_summary;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String new_url) {
        this.url = new_url;
    }

    public Date getDateUpdated() {
        return date_updated;
    }

    public void setDateUpdated(Date new_date_updated) {
        this.date_updated = new_date_updated;
    }

    public long getCreator() {
        return creator;
    }

    public void setCreator(long new_creator) {
        this.creator = new_creator;
    }

}