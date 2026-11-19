Feature: File Upload Functionality

  Scenario: Verify single file upload
    Given user opens the file upload page
    When user selects the sample file
    And user clicks the upload button
    Then uploaded file name should be displayed