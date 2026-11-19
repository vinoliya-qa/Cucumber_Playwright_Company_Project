Feature: Invalid Login Functionality

  @regression
  Scenario: Verify invalid login
    Given user opens the login page
    When user enters "admin" and "wrong123"
    And user clicks the login button
    Then user should see "Invalid Credentials"