package com.example.evictioneduspring.stepdefinitions;

import io.cucumber.java.Before;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.evictioneduspring.utils.CentralCommand;

public class Hooks {

    @Autowired
    private CentralCommand centralCommand;

    @Before("@connectToH2")
    public void connectToDatabase() {
        System.out.println("🔗 Attempting to connect to H2 database...");
        boolean connected = centralCommand.testConnection();
        if (connected) {
            System.out.println("✅ Successfully connected to the H2 database.");
        } else {
            throw new RuntimeException("❌ Failed to connect to the H2 database.");
        }
    }
}
