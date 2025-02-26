package com.example.evictioneduspring.stepdefinitions;

import com.example.evictioneduspring.utils.WebDriverSingleton;
import io.cucumber.java.en.And;
import org.openqa.selenium.WebDriver;

public class InitializationSteps {

    private final WebDriver driver;

    public InitializationSteps() {
        this.driver = WebDriverSingleton.getDriver(); // Use your driver initialization logic
    }

    /**
     * Visits provided link
     * @param link
     */
    @And("I go to the link {string}")
    public void iClickOn(String link) {
        driver.manage().window().maximize();
        driver.get(link);
    }
}
