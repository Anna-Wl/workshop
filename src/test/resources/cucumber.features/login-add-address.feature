Feature: Login user and add new address

  Scenario: Login user and add address
    Given Page https://prod-kurs.coderslab.pl/index.php opened in browser
    When Click 'Sign in' link
    And Enter email 'test@testshop.com' and password 'Padqwe1$'
    And Click 'Sing in' button
    And Click 'Addresses' link
    And Click 'Create new address' link
    And Enter alias 'Mr'
    And Enter address 'Polna 23'
    And Enter zip/postal code '55-100'
    And Enter city 'London'
    And Choose country 'United Kingdom'
    And Enter phone number '668956224'
    And Fill the form
    And Click 'Save' button
    Then Data are displayed in a browser

