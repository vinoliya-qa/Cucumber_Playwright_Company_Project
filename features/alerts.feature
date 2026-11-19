
Feature: JavaScript Alerts Handling

  Scenario: Verify Simple Alert
    Given user opens the alerts practice page
    When user clicks Simple Alert button
    Then simple alert message should be displayed

  Scenario: Verify Confirmation Alert
    Given user opens the alerts practice page
    When user clicks Confirmation Alert button
    Then confirmation alert message should be displayed

  Scenario: Verify Prompt Alert
    Given user opens the alerts practice page
    When user clicks Prompt Alert button
    Then prompt alert should accept the text "Ajay"