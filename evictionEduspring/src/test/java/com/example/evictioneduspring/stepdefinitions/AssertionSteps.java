package com.example.evictioneduspring.stepdefinitions;

import io.cucumber.java.en.Then;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.evictioneduspring.utils.CentralCommand;

import java.util.List;
import static org.junit.jupiter.api.Assertions.*;


public class AssertionSteps {

    @Autowired
    private CentralCommand CentralCommand;

    /**
     *
     * @param userid i.e. UserId = 1
     * @param expectedValue i.e. Steve
     */
    @Then("the first name of user {string} is {string}")
    public void theFromUseridIs(String userid, String expectedValue) {
        List<List<Object>> results = CentralCommand.executeQueryWithOneParameter("SELECT fname FROM Users WHERE user_id = ?;", userid);
        assertEquals(expectedValue, results.get(0).get(0));
    }
}
