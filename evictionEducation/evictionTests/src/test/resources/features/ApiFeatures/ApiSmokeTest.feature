@setUp @tearDown
Feature: API Smoke Test

  Scenario: I perform an api request on faqs
    And I send a GET request to "/faqs"
    Then I check that the response status is 200

  Scenario: I perform an api request on resources
    And I send a GET request to "/resources"
    Then I check that the response status is 200

  Scenario: I perform an api request on faq list
    And I send a GET request to "/resources/faq-list"
    Then I check that the response status is 200

  Scenario: I perform an api request on tree node 1
    And I send a GET request to "/tree/1"
    Then I check that the response status is 200

  Scenario: I perform an api request on node list
    And I send a GET request to "/resources/node-list"
    Then I check that the response status is 200

  Scenario: I perform an api request on qa list
    And I send a GET request to "/questions/qa-list"
    Then I check that the response status is 200