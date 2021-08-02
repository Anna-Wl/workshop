$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/cucumber.features/login-and-order.feature");
formatter.feature({
  "line": 1,
  "name": "Login user and add new address",
  "description": "",
  "id": "login-user-and-add-new-address",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login user and add address",
  "description": "",
  "id": "login-user-and-add-new-address;login-user-and-add-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Page https://prod-kurs.coderslab.pl/index.php opened in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click \u0027Sign in\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter email \u0027\u003cemail\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click \u0027Sing in\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click \u0027Clothes\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click product \u0027\u003cproduct\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Discount for product is \u0027\u003cdiscount\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Price of product is \u0027\u003cprice\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose size \u0027\u003csize\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose \u0027\u003citemsNumber\u003e\u0027 items",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Add product to basket",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click \u0027Proceed to checkout\u0027 on Modal Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click \u0027Proceed to checkout\u0027 on Cart Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click \u0027Continue\u0027 button to confirm address",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose shipping method \u0027\u003cshipping\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click \u0027Continue\u0027 button to confirm shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Choose payment method \u0027\u003cpayment\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click \u0027agree to the terms of service\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click \u0027Order with and obligation to pay button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Take screenshot of order confirmation and price",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click user name",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click \u0027Order history and details\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Order with status \u0027Awaiting check payment\u0027 and correct total",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "login-user-and-add-new-address;login-user-and-add-address;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "product",
        "discount",
        "price",
        "size",
        "itemsNumber",
        "shipping",
        "payment"
      ],
      "line": 30,
      "id": "login-user-and-add-new-address;login-user-and-add-address;;1"
    },
    {
      "cells": [
        "test@testshop.com",
        "Padqwe1$",
        "Hummingbird Printed Sweater",
        "-20%",
        "€28.72",
        "XL",
        "3",
        "PrestaShop",
        "Pay by Check"
      ],
      "line": 31,
      "id": "login-user-and-add-new-address;login-user-and-add-address;;2"
    },
    {
      "cells": [
        "test1@testsome.com",
        "pass887££",
        "Hummingbird Printed Sweater",
        "-20%",
        "€28.72",
        "M",
        "2",
        "My carrier",
        "Pay by bank wire"
      ],
      "line": 32,
      "id": "login-user-and-add-new-address;login-user-and-add-address;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Login user and add address",
  "description": "",
  "id": "login-user-and-add-new-address;login-user-and-add-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Page https://prod-kurs.coderslab.pl/index.php opened in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click \u0027Sign in\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter email \u0027test@testshop.com\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter password \u0027Padqwe1$\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click \u0027Sing in\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click \u0027Clothes\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click product \u0027Hummingbird Printed Sweater\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Discount for product is \u0027-20%\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Price of product is \u0027€28.72\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose size \u0027XL\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose \u00273\u0027 items",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Add product to basket",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click \u0027Proceed to checkout\u0027 on Modal Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click \u0027Proceed to checkout\u0027 on Cart Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click \u0027Continue\u0027 button to confirm address",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose shipping method \u0027PrestaShop\u0027",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click \u0027Continue\u0027 button to confirm shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Choose payment method \u0027Pay by Check\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click \u0027agree to the terms of service\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click \u0027Order with and obligation to pay button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Take screenshot of order confirmation and price",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click user name",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click \u0027Order history and details\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Order with status \u0027Awaiting check payment\u0027 and correct total",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://prod-kurs.coderslab.pl/index.php",
      "offset": 5
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.openPageInBrowser(String)"
});
formatter.result({
  "duration": 5316817900,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickSignInLink()"
});
formatter.result({
  "duration": 529667700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@testshop.com",
      "offset": 13
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.enterEmail(String)"
});
formatter.result({
  "duration": 214257900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Padqwe1$",
      "offset": 16
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.enterPassword(String)"
});
formatter.result({
  "duration": 173158700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickSignInButton()"
});
formatter.result({
  "duration": 688503000,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickClothesLink()"
});
formatter.result({
  "duration": 464610600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hummingbird Printed Sweater",
      "offset": 15
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.chooseProduct(String)"
});
formatter.result({
  "duration": 910321000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-20%",
      "offset": 25
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.isProductDiscontedWith20Percent(String)"
});
formatter.result({
  "duration": 92400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "€28.72",
      "offset": 21
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.isProductPrice(String)"
});
formatter.result({
  "duration": 94700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XL",
      "offset": 13
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.chooseSize(String)"
});
formatter.result({
  "duration": 2350277100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.chooseNumOfItems(int)"
});
formatter.result({
  "duration": 2167583300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.addProductToBasket()"
});
formatter.result({
  "duration": 2073769400,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickProceedToCheckout()"
});
formatter.result({
  "duration": 462327700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickProceedToCheckoutonCartPage()"
});
formatter.result({
  "duration": 457433800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickContinueToConfirmAddress()"
});
formatter.result({
  "duration": 638518400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PrestaShop",
      "offset": 24
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.chooseShippingMethod(String)"
});
formatter.result({
  "duration": 51038300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickContinueButtonToConfirmShippingMethod()"
});
formatter.result({
  "duration": 646123800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pay by Check",
      "offset": 23
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.choosePaymentMethod(String)"
});
formatter.result({
  "duration": 136936300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickAgreeToTheTermsOfService()"
});
formatter.result({
  "duration": 97344600,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickorderWithAnObligationToPayButton()"
});
formatter.result({
  "duration": 821462500,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.takeScreenshotOfOrderConfirmationAndPrice()"
});
formatter.result({
  "duration": 451330100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickUsernName()"
});
formatter.result({
  "duration": 370961900,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickOrderHistoryAndDetails()"
});
formatter.result({
  "duration": 2662126400,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.orderStatusAwaitingCheckPaymentAndCorrectTotals()"
});
formatter.result({
  "duration": 2186740200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Login user and add address",
  "description": "",
  "id": "login-user-and-add-new-address;login-user-and-add-address;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Page https://prod-kurs.coderslab.pl/index.php opened in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click \u0027Sign in\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter email \u0027test1@testsome.com\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter password \u0027pass887££\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click \u0027Sing in\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click \u0027Clothes\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click product \u0027Hummingbird Printed Sweater\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Discount for product is \u0027-20%\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Price of product is \u0027€28.72\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose size \u0027M\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose \u00272\u0027 items",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Add product to basket",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click \u0027Proceed to checkout\u0027 on Modal Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click \u0027Proceed to checkout\u0027 on Cart Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click \u0027Continue\u0027 button to confirm address",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose shipping method \u0027My carrier\u0027",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click \u0027Continue\u0027 button to confirm shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Choose payment method \u0027Pay by bank wire\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click \u0027agree to the terms of service\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click \u0027Order with and obligation to pay button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Take screenshot of order confirmation and price",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click user name",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click \u0027Order history and details\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Order with status \u0027Awaiting check payment\u0027 and correct total",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://prod-kurs.coderslab.pl/index.php",
      "offset": 5
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.openPageInBrowser(String)"
});
formatter.result({
  "duration": 3341995700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickSignInLink()"
});
formatter.result({
  "duration": 458502300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1@testsome.com",
      "offset": 13
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.enterEmail(String)"
});
formatter.result({
  "duration": 354856100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass887££",
      "offset": 16
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.enterPassword(String)"
});
formatter.result({
  "duration": 337862200,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickSignInButton()"
});
formatter.result({
  "duration": 692987800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickClothesLink()"
});
formatter.result({
  "duration": 541038800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hummingbird Printed Sweater",
      "offset": 15
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.chooseProduct(String)"
});
formatter.result({
  "duration": 671710600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-20%",
      "offset": 25
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.isProductDiscontedWith20Percent(String)"
});
formatter.result({
  "duration": 76200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "€28.72",
      "offset": 21
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.isProductPrice(String)"
});
formatter.result({
  "duration": 70800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 13
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.chooseSize(String)"
});
formatter.result({
  "duration": 2474902500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.chooseNumOfItems(int)"
});
formatter.result({
  "duration": 2113290600,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.addProductToBasket()"
});
formatter.result({
  "duration": 2097217300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickProceedToCheckout()"
});
formatter.result({
  "duration": 445006900,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickProceedToCheckoutonCartPage()"
});
formatter.result({
  "duration": 443218100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickContinueToConfirmAddress()"
});
formatter.result({
  "duration": 666129200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My carrier",
      "offset": 24
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.chooseShippingMethod(String)"
});
formatter.result({
  "duration": 151394300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickContinueButtonToConfirmShippingMethod()"
});
formatter.result({
  "duration": 691938700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pay by bank wire",
      "offset": 23
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.choosePaymentMethod(String)"
});
formatter.result({
  "duration": 182981300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickAgreeToTheTermsOfService()"
});
formatter.result({
  "duration": 128341000,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickorderWithAnObligationToPayButton()"
});
formatter.result({
  "duration": 1165120600,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.takeScreenshotOfOrderConfirmationAndPrice()"
});
formatter.result({
  "duration": 496197300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickUsernName()"
});
formatter.result({
  "duration": 477749800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickOrderHistoryAndDetails()"
});
formatter.result({
  "duration": 2576920800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.orderStatusAwaitingCheckPaymentAndCorrectTotals()"
});
formatter.result({
  "duration": 261140300,
  "status": "passed"
});
});