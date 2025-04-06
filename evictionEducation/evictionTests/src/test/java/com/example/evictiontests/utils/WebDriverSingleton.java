package com.example.evictiontests.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class WebDriverSingleton {

    static WebDriver driver;

    private WebDriverSingleton() {
        // Prevent instantiation
    }

    public static WebDriver getDriver() {
        if (driver == null) {
            /**
             * MUST DOWNLOAD CHROME DRIVER FOR APPROPRIATE CHROME VERSION AND PLACE IN CORRECT LOCATION
             * https://googlechromelabs.github.io/chrome-for-testing/
             */
            System.out.println(System.getProperty("user.dir"));
            System.setProperty("webdriver.chrome.driver", "./src/test/resources/chromedriver.exe");
            ChromeOptions options = new ChromeOptions();
            //options.addArguments("--start-maximized");
            driver = new ChromeDriver(options);
        }
        return driver;
    }

    public static void quitDriver() {
        if (driver != null) {
            driver.quit();
            driver = null;
        }
    }
}
