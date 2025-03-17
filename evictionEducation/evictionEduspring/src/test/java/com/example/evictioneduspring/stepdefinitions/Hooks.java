package com.example.evictioneduspring.stepdefinitions;

import com.example.evictioneduspring.utils.WebDriverSingleton;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.WebDriver;
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

    @Before("@setUp")
    public void setUp() {
        WebDriver driver = WebDriverSingleton.getDriver();
        driver.manage().deleteAllCookies();// Optional: Start fresh each scenario
    }

    @After("@setUp")
    public void tearDown() {
        WebDriverSingleton.quitDriver(); // Quits after all scenarios
    }
}
