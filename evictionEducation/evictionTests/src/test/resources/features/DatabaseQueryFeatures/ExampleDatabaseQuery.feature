@connectToH2
Feature: Example Database Query

  # Connection issues with database causing to fail, fixes to eventual Server based DB will fix
  Scenario: I check that the first name of user 1 is Nick
    Then the first name of user "1" is "Nick"