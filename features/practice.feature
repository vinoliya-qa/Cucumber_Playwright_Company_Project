
Feature: Practice Website Form

  Scenario: Verify name field
    Given user opens the practice website
    When user enters name "Ajay"
    Then name field should contain "Ajay"

  Scenario: Verify clear name field
    Given user opens the practice website
    When user enters name "Ajay"
    And user clears the name field
    Then name field should be empty

  Scenario: Verify Male radio button
    Given user opens the practice website
    When user selects Male radio button
    Then Male radio button should be selected
  Scenario: Verify Female radio button
    Given user opens the practice website
    When user selects Female radio button
    Then Female radio button should be selected

      Scenario: Verify multiple checkboxes
    Given user opens the practice website
    When user selects Sunday checkbox
    Then Sunday checkbox should be selected
    When user selects Monday checkbox
    Then Monday checkbox should be selected
    When user selects Tuesday checkbox
    Then Tuesday checkbox should be selected

      Scenario: Verify country dropdown
    Given user opens the practice website
    When user selects country "india"
    Then country dropdown should show "india"


      Scenario: Verify date picker
    Given user opens the practice website
    When user enters date "11/19/2026"
    Then date field should show "11/19/2026"