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
  "name": "Click product \u0027Hummingbird Printed Sweater\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Discount for product is \u0027-20%\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Price of product is \u0027€28.72\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose size \u0027M\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose \u00275\u0027 items",
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
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click \u0027Continue\u0027 button to confirm shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Choose payment method \u0027Pay By Check\u0027",
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
        "alias",
        "address",
        "city",
        "zip",
        "country",
        "phone"
      ],
      "line": 30,
      "id": "login-user-and-add-new-address;login-user-and-add-address;;1"
    },
    {
      "cells": [
        "test@testshop.com",
        "Padqwe1$",
        "Mr",
        "Polna 23",
        "London",
        "55-100",
        "United Kingdom",
        "668956224"
      ],
      "line": 31,
      "id": "login-user-and-add-new-address;login-user-and-add-address;;2"
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
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Discount for product is \u0027-20%\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Price of product is \u0027€28.72\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose size \u0027M\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose \u00275\u0027 items",
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
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click \u0027Continue\u0027 button to confirm shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Choose payment method \u0027Pay By Check\u0027",
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
  "duration": 4496762400,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickSignInLink()"
});
formatter.result({
  "duration": 401194000,
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
  "duration": 190313000,
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
  "duration": 175526200,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickSignInButton()"
});
formatter.result({
  "duration": 628550600,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickClothesLink()"
});
formatter.result({
  "duration": 411467400,
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
  "duration": 588115700,
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
  "duration": 90500,
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
  "duration": 94400,
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
  "duration": 180403200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.chooseNumOfItems(int)"
});
formatter.result({
  "duration": 300414500,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.addProductToBasket()"
});
formatter.result({
  "duration": 2098852500,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickProceedToCheckout()"
});
formatter.result({
  "duration": 410109000,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickProceedToCheckoutonCartPage()"
});
formatter.result({
  "duration": 405763800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickContinueToConfirmAddress()"
});
formatter.result({
  "duration": 566918700,
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
  "duration": 40568900,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickContinueButtonToConfirmShippingMethod()"
});
formatter.result({
  "duration": 585317200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pay By Check",
      "offset": 23
    }
  ],
  "location": "MyStoreLoginAndOrderPageObjSteps.choosePaymentMethod(String)"
});
formatter.result({
  "duration": 121636800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickAgreeToTheTermsOfService()"
});
formatter.result({
  "duration": 110003200,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickorderWithAnObligationToPayButton()"
});
formatter.result({
  "duration": 683835400,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.takeScreenshotOfOrderConfirmationAndPrice()"
});
formatter.result({
  "duration": 245672500,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickUsernName()"
});
formatter.result({
  "duration": 357185300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.clickOrderHistoryAndDetails()"
});
formatter.result({
  "duration": 2436850300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAndOrderPageObjSteps.orderStatusAwaitingCheckPaymentAndCorrectTotals()"
});
formatter.result({
  "duration": 870196200,
  "status": "passed"
});
});