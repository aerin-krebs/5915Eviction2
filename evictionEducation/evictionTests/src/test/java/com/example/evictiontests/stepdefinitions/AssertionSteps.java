package com.example.evictiontests.stepdefinitions;

import com.example.evictiontests.constants.XPathConstants;
import com.example.evictiontests.utils.TestHelper;
import io.cucumber.java.en.Then;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.evictiontests.utils.CentralCommand;

import java.util.List;
import static org.junit.Assert.*;


public class AssertionSteps {

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


    /**
     * Checks if a certain web element is visible
     * @param elementName
     */
    @Then("I check that {string} is visible")
    public void iCheckThatIsVisible(String elementName) {
        assertTrue(TestHelper.getElementByName(elementName).isDisplayed());
    }

    @Then("I check that the legal disclaimer is visible")
    public void iCheckThatTheLegalDisclaimerIsVisible() {
        boolean check1 = TestHelper.getElementByXPath(XPathConstants.LEGAL_DISCLAIMER_POPUP).isDisplayed();
        boolean check2 = TestHelper.getElementByXPath(XPathConstants.I_AGREE_BUTTON).isDisplayed();

        assertTrue(check1 && check2);
    }
}
