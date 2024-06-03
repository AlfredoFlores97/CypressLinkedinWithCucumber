Feature: First test Linkedin

Background: Background Linkedin
    Given I visit "https://www.linkedin.com/"
    Then I catch uncaught exception
    Then I check modal consent settigns user and close it
    Then I check modal app and close it

Scenario: Login fail for bad credentials
    Given I type on the input with "id" "session_key" the text value "user"
    When I type on the input with "id" "session_password" the text value "password"
    And I check text "Please enter a valid email address." not exist in page
    And I click in button with id "sign-in-form__submit-btn"
    Then I check text "Please enter a valid email address." exist in page

Scenario: Check button exist and click it
    Given I check url equals "https://www.linkedin.com/"
    When I chek input with id "session_key" exist in page
    And I chek input with id "session_password" exist in page
    # Given I chek input with id "session_key" have "be.exist" atribute
    # Given I chek input with id "session_password" have "be.exist" atribute
    And I check text "Sign in to view more content" not exist in page
    And I check button with href "https://www.linkedin.com/pulse/topics/engineering-s166/" exist on page and click it
    And I check url equals "https://www.linkedin.com/pulse/topics/engineering-s166/"
    And I chek input with id "session_key" not exist in page
    And I chek input with id "session_password" not exist in page
    # Then I chek input with id "session_key" have "not.be.exist" atribute
    # Then I chek input with id "session_password" have "not.be.exist" atribute
    Then I check text "Sign in to view more content" exist in page