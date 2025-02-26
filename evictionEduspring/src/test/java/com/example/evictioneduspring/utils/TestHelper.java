package com.example.evictioneduspring.utils;

import com.example.evictioneduspring.constants.ElementMapper;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static com.example.evictioneduspring.utils.WebDriverSingleton.driver;

public class TestHelper {
    public static WebElement getElementByXPath(String xpath) {
        return driver.findElement(By.xpath(xpath));
    }

    public static WebElement getElementByName(String elementName) {
        return getElementByXPath(ElementMapper.getXPath(elementName));
    }
}
