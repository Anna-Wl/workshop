Feature: Login user and add new address

  Scenario Outline: Login user and add address
    Given Page https://prod-kurs.coderslab.pl/index.php opened in browser
    When Click 'Sign in' link
    And Enter email '<email>'
    And Enter password '<password>'
    And Click 'Sing in' button
    And Click 'Clothes' link
    And Click product 'Hummingbird Printed Sweater'
    And Discount for product is '-20%'
    And Price of product is '€28.72'
    And Choose size 'M'
    And Choose '5' items
    And Add product to basket
    And Click 'Proceed to checkout' on Modal Page
    And Click 'Proceed to checkout' on Cart Page
    And Click 'Continue' button to confirm address
    And Choose shipping method 'PrestaShop'
    And Click 'Continue' button to confirm shipping method
    And Choose payment method 'Pay By Check'
    And Click 'agree to the terms of service'
    And Click 'Order with and obligation to pay button'
    And Take screenshot of order confirmation and price
    And Click user name
    And Click 'Order history and details'
    Then Order with status 'Awaiting check payment' and correct total

    Examples:
      |email             |password |alias|address  |city  |zip   |country       |phone    |
      |test@testshop.com |Padqwe1$ |Mr   |Polna 23 |London|55-100|United Kingdom|668956224|


