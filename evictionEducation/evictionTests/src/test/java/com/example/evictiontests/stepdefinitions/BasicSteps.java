package com.example.evictiontests.stepdefinitions;

import com.example.evictiontests.utils.TestHelper;
import com.example.evictiontests.utils.WebDriverSingleton;
import io.cucumber.java.en.And;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;


public class BasicSteps {

    private final WebDriver driver;

    public BasicSteps() {
        this.driver = WebDriverSingleton.getDriver(); // Use your driver initialization logic
    }

    /**
     * Clicks on web element whose xpath is predefined in ElementMapper and XPathConstants
     * @param elementName
     */
    @And("I click on {string}")
    public void iClickOn(String elementName) {
        TestHelper.getElementByName(elementName).click();
    }


    @And("I wait {string} seconds")
    public void iWaitSeconds(String seconds) throws InterruptedException {
        new WebDriverWait(driver, Duration.ofSeconds(Long.parseLong(seconds)))
                .until(webDriver -> ((JavascriptExecutor) webDriver)
                        .executeScript("return document.readyState").equals("complete"));
    }
}
