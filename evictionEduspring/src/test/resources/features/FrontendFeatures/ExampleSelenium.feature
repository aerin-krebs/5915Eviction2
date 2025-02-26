@setUp @tearDown
Feature: Example Selenium

  Background:
    And I go to the link "http://localhost:3000"

  Scenario:
    And I click on "find a solution button"
    And I wait "5" seconds