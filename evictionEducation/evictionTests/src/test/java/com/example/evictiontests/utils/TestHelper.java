package com.example.evictiontests.utils;

import com.example.evictiontests.constants.ElementMapper;
import com.example.evictiontests.utils.WebDriverSingleton;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;


public class TestHelper {
    public static WebElement getElementByXPath(String xpath) {
        WebDriverWait wait = new WebDriverWait(WebDriverSingleton.getDriver(), Duration.ofSeconds(5));  // Wait up to 10 seconds
        try {
            WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xpath)));
            System.out.println("✅ Element '" + xpath + "' is visible.");
            return element;
        } catch (Exception e) {
            throw new AssertionError("❌ Element '" + xpath + "' is not visible after waiting.", e);
        }
    }

    public static WebElement getElementByName(String elementName) {
        return getElementByXPath(ElementMapper.getXPath(elementName));
    }
}
