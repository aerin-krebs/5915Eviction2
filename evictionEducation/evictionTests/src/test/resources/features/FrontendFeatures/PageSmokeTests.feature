@setUp @tearDown
Feature: Page Smoke Tests

  Background:
    And I go to the link "http://localhost:3000"
    And I wait "1" seconds
    And I click on "i agree button"
    And I click on "no button"

  Scenario: I navigate to home
    And I click on "home button"
    Then I check that "facing eviction text" is visible

  Scenario: I navigate to find a solution
    And I click on "find a solution button"
    Then I check that "solution finder header" is visible

  Scenario: I navigate to chat
    And I click on "chat button"
    Then I check that "facebook messenger chat button" is visible

  Scenario: I navigate to faqs
    And I click on "faqs button"
    Then I check that "frequently asked questions text" is visible

  Scenario: I navigate to resources
    And I click on "resources button"
    Then I check that "finding resources text" is visible