@setUp @tearDown
Feature: Legal Disclaimer

  Background:
    And I go to the link "http://localhost:3000"
    And I wait "1" seconds
    And I click on "i agree button"
    And I click on "no button"

  Scenario: I check google translate is present on home page
    And I check that "google translate dropdown" is visible

  Scenario: I check google translate is present on find a solution page
    And I click on "find a solution button"
    And I check that "google translate dropdown" is visible

  Scenario: I check google translate is present on chat page
    And I click on "chat button"
    And I check that "google translate dropdown" is visible

  Scenario: I check google translate is present on faq page
    And I click on "faqs button"
    And I check that "google translate dropdown" is visible

  Scenario: I check google translate is present on resources page
    And I click on "resources button"
    And I check that "google translate dropdown" is visible