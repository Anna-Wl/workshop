Feature: Create user account


  Scenario Outline: Create user account
    Given Page https://prod-kurs.coderslab.pl/index.php opened in browser
    When Click 'Sign in' link
    And Click 'No account Create one here' link
    And Choose title '<title>'
    And Enter name '<name>'
    And Enter surname '<surname>'
    And Enter email
    And Enter password '<password>'
    And Enter birthday '<birthday>'
    And Set Receive Offers <receiveOffers>
    And Set Newsletter <newsletter>
    And Fill the form
    And Click 'Save' button
    Then User name displayed in a browser

    Examples:
    |title|name|surname |password|birthday  |receiveOffers|newsletter|
    |Mrs  |Jan |Kowalski|pass123 |02/12/1988|true         |true      |