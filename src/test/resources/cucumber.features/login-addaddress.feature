Feature: Login user and add address

  Scenario: Login user and add address
    Given Page https://prod-kurs.coderslab.pl/index.php opened in browser
    When Click 'Sign in' link
    And Enter email and password
    And Click 'Sing in' button
    And Click 'Addresses'
    And Click '+ Create new address' link
    And Enter alias
    And Enter address
    And Enter zip/postal code
    And Enter city
    And Choose country
    And Enter phone number
    And Fill the form
    And Click 'Save' button
    And Click 'Register' button
    Then Data displayed in a browser


