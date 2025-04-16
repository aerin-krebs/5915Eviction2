package com.example.evictiontests.stepdefinitions;

import com.example.evictiontests.utils.WebDriverSingleton;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.WebDriver;
import com.example.evictiontests.utils.CentralCommand;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.text.SimpleDateFormat;
import java.util.Date;

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

    @After("@tearDown")
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            try {
                // Take screenshot as file
                File screenshot = ((TakesScreenshot) WebDriverSingleton.getDriver()).getScreenshotAs(OutputType.FILE);

                // Create date-based folder
                String dateFolder = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
                Path screenshotDir = Paths.get("screenshots", dateFolder);
                Files.createDirectories(screenshotDir);  // Ensure folder exists

                // Prepare filename: scenario-name__HH-mm-ss.png
                String timeStamp = new SimpleDateFormat("HH-mm-ss").format(new Date());
                String safeScenarioName = scenario.getName().replaceAll("[^a-zA-Z0-9.-]", "_");
                String fileName = safeScenarioName + "__" + timeStamp + ".png";

                // Full path
                Path destination = screenshotDir.resolve(fileName);

                // Copy screenshot to destination
                Files.copy(screenshot.toPath(), destination, StandardCopyOption.REPLACE_EXISTING);

                System.out.println("📸 Screenshot saved at: " + destination.toAbsolutePath());

            } catch (IOException e) {
                System.err.println("❌ Failed to save screenshot: " + e.getMessage());
            }
        }
        WebDriverSingleton.quitDriver(); // Quits after all scenarios
    }
}
