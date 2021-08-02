Feature: Login user and add new address

  Scenario Outline: Login user and add address
    Given Page https://prod-kurs.coderslab.pl/index.php opened in browser
    When Click 'Sign in' link
    And Enter email '<email>'
    And Enter password '<password>'
    And Click 'Sing in' button
    And Click 'Clothes' link
    And Click product '<product>'
    And Discount for product is '<discount>'
    And Price of product is '<price>'
    And Choose size '<size>'
    And Choose '<itemsNumber>' items
    And Add product to basket
    And Click 'Proceed to checkout' on Modal Page
    And Click 'Proceed to checkout' on Cart Page
    And Click 'Continue' button to confirm address
    And Choose shipping method '<shipping>'
    And Click 'Continue' button to confirm shipping method
    And Choose payment method '<payment>'
    And Click 'agree to the terms of service'
    And Click 'Order with and obligation to pay button'
    And Take screenshot of order confirmation and price
    And Click user name
    And Click 'Order history and details'
    Then Order with status 'Awaiting check payment' and correct total

    Examples:
      |email            |password  |product                    |discount|price |size|itemsNumber|shipping  |payment         |
      |test@testshop.com|Padqwe1$  |Hummingbird Printed Sweater|-20%    |€28.72|XL  |3          |PrestaShop|Pay by Check    |
      |test1@testsome.com|pass887££|Hummingbird Printed Sweater|-20%    |€28.72|M   |2          |My carrier|Pay by bank wire|

