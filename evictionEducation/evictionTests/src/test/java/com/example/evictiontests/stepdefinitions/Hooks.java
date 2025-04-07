package com.example.evictiontests.stepdefinitions;

import com.example.evictiontests.utils.WebDriverSingleton;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.WebDriver;
import com.example.evictiontests.utils.CentralCommand;

public class Hooks {


    @Before("@connectToH2")
    public void connectToDatabase() {
        System.out.println("🔗 Attempting to connect to H2 database...");
        boolean connected = CentralCommand.testConnection();
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
