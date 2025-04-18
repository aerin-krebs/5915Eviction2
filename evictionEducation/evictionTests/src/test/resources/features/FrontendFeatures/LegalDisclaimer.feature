@setUp @tearDown
Feature: Legal Disclaimer

  Background:
    And I go to the link "http://localhost:3000"
    And I wait "1" seconds

  Scenario: I check that the legal disclaimer is present on initial visit to site
    Then I check that the legal disclaimer is visible