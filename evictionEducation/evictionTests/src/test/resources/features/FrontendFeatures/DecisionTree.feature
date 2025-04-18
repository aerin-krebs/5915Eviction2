@setUp @tearDown
Feature: Decision Tree

  Background:
    And I go to the link "http://localhost:3000"
    And I wait "1" seconds
    And I click on "i agree button"
    And I click on "yes button"
    And I wait "1" seconds

  Scenario: I navigate to legal aid society via 3 day notice
    And I click on "three day notice button"
    And I click on "yes button"
    Then I check that "legal aid society button" is visible

  Scenario: I navigate to legal aid society via 30 day notice
    And I click on "thirty day notice button"
    And I click on "yes button"
    Then I check that "legal aid society button" is visible

  Scenario: I navigate to additional resources page
    And I click on "three day notice button"
    And I click on "no button"
    And I click on "yes button"
    Then I check that "resources tree button" is visible

  Scenario: I navigate to chat and resources page
    And I click on "three day notice button"
    And I click on "no button"
    And I click on "no button"
    Then I check that "chat tree button" is visible

  Scenario: I navigate to chat and resources page
    And I click on "thirty day notice button"
    And I click on "no button"
    Then I check that "more information needed text" is visible