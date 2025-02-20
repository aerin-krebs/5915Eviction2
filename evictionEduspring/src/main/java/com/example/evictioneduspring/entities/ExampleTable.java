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
    private ... 

    protected ExampleTable() {}

    public ExampleTable() {
        
    }

    @Override
    public String toString() {
        return String.format();
    }

    public get() {

    }

    public void set() {
        
    }

    // INVALID - PRIMARY KEY

}