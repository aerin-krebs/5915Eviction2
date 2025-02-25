package com.example.evictioneduspring.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
// @Table(name = "example-table")
public class ExampleTable {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private String example;

    protected ExampleTable() {}

    public ExampleTable(String tmp) {
        this.example = tmp;
    }

    @Override
    public String toString() {
        return String.format("Hello%d", 11);
    }

    public void get() {

    }

    public void set() {
        
    }

    // INVALID - PRIMARY KEY

}