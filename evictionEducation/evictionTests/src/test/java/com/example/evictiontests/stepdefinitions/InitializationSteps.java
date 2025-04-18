package com.example.evictiontests.stepdefinitions;

import com.example.evictiontests.constants.TestContext;
import com.example.evictiontests.utils.WebDriverSingleton;
import io.cucumber.java.en.And;
import org.openqa.selenium.WebDriver;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

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
        //driver.manage().window().maximize();
        driver.get(link);
    }

    /**
     * Gets http endpoint request
     * @param endpoint
     * @throws IOException
     * @throws InterruptedException
     */
    @And("I send a GET request to {string}")
    public void i_send_a_get_request(String endpoint) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("http://localhost:8080/api" + endpoint))  // adjust your base URL
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        TestContext.put("apiResponse", response);
    }
}
