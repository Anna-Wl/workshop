Feature: Login user and add new address

  Scenario Outline: Login user and add address
    Given Page https://prod-kurs.coderslab.pl/index.php opened in browser
    When Click 'Sign in' link
    And Enter email '<email>'
    And Enter password '<password>'
    And Click 'Sing in' button
    And Click 'Addresses' link
    And Click 'Create new address' link
    And Enter alias '<alias>'
    And Enter address '<address>'
    And Enter zip/postal code '<zip>'
    And Enter city '<city>'
    And Choose country '<country>'
    And Enter phone number '<phone>'
    And Fill the form
    And Click 'Save' button
    And Check data are displayed in a browser
    And Click 'Delete' link
    Then Message 'Address successfully deleted!' displayed on the page

    Examples:
    |email             |password |alias|address  |city  |zip   |country       |phone    |
    |test@testshop.com |Padqwe1$ |Mr   |Polna 23 |London|55-100|United Kingdom|668956224|



