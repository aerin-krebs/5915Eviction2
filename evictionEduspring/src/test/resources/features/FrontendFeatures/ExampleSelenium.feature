@setUp @tearDown
Feature: Example Selenium

  Background:
    And I go to the link "http://localhost:3000"

  Scenario: I navigate to through the decision tree to reach the chatbot
    And I click on "find a solution button"
    And I click on "three day notice button"
    And I click on "no button"
    And I click on "no button"
    And I click on "open chatbot button"
    Then I check that "open messenger chat button" is visible