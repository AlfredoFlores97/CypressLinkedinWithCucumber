Feature: Second test Linkedin

Background: Background Linkedin
    Given I visit "https://www.linkedin.com/"
    Then I catch uncaught exception
    Then I check modal consent settigns user and close it
    Then I check modal app and close it

Scenario: Login succesfull
    Given I check url equals "https://www.linkedin.com/"
    When I type on the input with "id" "session_key" the text value "username"
    And I type on the input with "id" "session_password" the text value "password"
    And I click in button with id "sign-in-form__submit-btn"
    Then I check url equals "https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
    
Scenario: Login fail for bad username
    Given I type on the input with "id" "session_key" the text value "user"
    When I type on the input with "id" "session_password" the text value "password"
    And I check text "Please enter a valid email address." not exist in page
    And I click in button with id "sign-in-form__submit-btn"
    Then I check text "Please enter a valid email address." exist in page

Scenario: Login fail for bad password
    Given I type on the input with "id" "session_key" the text value "username"
    When I type on the input with "id" "session_password" the text value "puassdasdsadas"
    And I check text "Wrong email or password. Try again or create an account ." not exist in page
    And I click in button with id "sign-in-form__submit-btn"
    Then I check text "Wrong email or password. Try again or create an account ." exist in page

Scenario: Search frontend developer
    Given I check url equals "https://www.linkedin.com/"
    When I type on the input with "id" "session_key" the text value "username"
    And I type on the input with "id" "session_password" the text value "password"
    And I click in button with id "sign-in-form__submit-btn"
    And I check url equals "https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
    And I check the input with "class" "search-global-typeahead__input" have "not.visible" state
    And I click on the input with "class" "search-global-typeahead__collapsed-search-button"
    And I check the input with "class" "search-global-typeahead__input" have "be.visible" state
    And I type on the input with "class" "search-global-typeahead__input" the text value "Frontend Developer"
    And I enter on the input with "class" "search-global-typeahead__input"
    And I check the input with "id" "QpPjxLgXT1GghT45LukjlA==" have "be.visible" state 
    
