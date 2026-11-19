
Feature: DataTable Methods in Cucumber

  Scenario: Verify credentials using hashes
    Given user opens the login page
    When user checks credentials using hashes
      | username | password |
      | admin    | 12345    |
      | tester   | test123  |

  Scenario: Verify credentials using rows
    Given user opens the login page
    When user reads credentials using rows
      | username | password |
      | admin    | 12345    |
      | tester   | test123  |

  Scenario: Verify credentials using raw
    Given user opens the login page
    When user reads complete table using raw
      | username | password |
      | admin    | 12345    |
      | tester   | test123  |
Scenario: Verify failure screenshot
    Given user opens the login page
    Then user should see "Wrong Message"