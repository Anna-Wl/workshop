$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/cucumber.features/login-add-address.feature");
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
  "name": "Click \u0027Addresses\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click \u0027Create new address\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter alias \u0027\u003calias\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter address \u0027\u003caddress\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter zip/postal code \u0027\u003czip\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter city \u0027\u003ccity\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose country \u0027\u003ccountry\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter phone number \u0027\u003cphone\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Fill the form",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click \u0027Save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Data are displayed in a browser",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click \u0027Delete\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Message \u0027Address successfully deleted!\u0027 displayed on the page",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
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
      "line": 24,
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
      "line": 25,
      "id": "login-user-and-add-new-address;login-user-and-add-address;;2"
    },
    {
      "cells": [
        "test1@testsome.com",
        "pass887££",
        "Mrs",
        "Colney 3",
        "Leeds",
        "E1522N",
        "United Kingdom",
        "788545265"
      ],
      "line": 26,
      "id": "login-user-and-add-new-address;login-user-and-add-address;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
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
  "name": "Click \u0027Addresses\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click \u0027Create new address\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter alias \u0027Mr\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter address \u0027Polna 23\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter zip/postal code \u002755-100\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter city \u0027London\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose country \u0027United Kingdom\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter phone number \u0027668956224\u0027",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Fill the form",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click \u0027Save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Data are displayed in a browser",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click \u0027Delete\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Message \u0027Address successfully deleted!\u0027 displayed on the page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://prod-kurs.coderslab.pl/index.php",
      "offset": 5
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.openPageInBrowser(String)"
});
formatter.result({
  "duration": 4840166800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickSignInLink()"
});
formatter.result({
  "duration": 567609500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@testshop.com",
      "offset": 13
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterEmail(String)"
});
formatter.result({
  "duration": 367981500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Padqwe1$",
      "offset": 16
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterPassword(String)"
});
formatter.result({
  "duration": 375691900,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickSignInButton()"
});
formatter.result({
  "duration": 842812600,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickAddressesLink()"
});
formatter.result({
  "duration": 645225100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickCreateNewAddressLink()"
});
formatter.result({
  "duration": 630321300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 13
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterAlias(String)"
});
formatter.result({
  "duration": 68300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Polna 23",
      "offset": 15
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterAddress(String)"
});
formatter.result({
  "duration": 70400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55-100",
      "offset": 23
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterPostalCode(String)"
});
formatter.result({
  "duration": 65300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 12
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterCity(String)"
});
formatter.result({
  "duration": 71900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 16
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.chooseCountry(String)"
});
formatter.result({
  "duration": 78200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "668956224",
      "offset": 20
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterPhoneNumber(String)"
});
formatter.result({
  "duration": 134600,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.fillTheForm()"
});
formatter.result({
  "duration": 2087776700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickSaveButton()"
});
formatter.result({
  "duration": 539090700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.dataDisplayedInBrowser()"
});
formatter.result({
  "duration": 507930900,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickDeleteLink()"
});
formatter.result({
  "duration": 712865800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.addressDeletedMessageDisplayed()"
});
formatter.result({
  "duration": 52525200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
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
  "name": "Click \u0027Addresses\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click \u0027Create new address\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter alias \u0027Mrs\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter address \u0027Colney 3\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter zip/postal code \u0027E1522N\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter city \u0027Leeds\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose country \u0027United Kingdom\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter phone number \u0027788545265\u0027",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Fill the form",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click \u0027Save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Data are displayed in a browser",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click \u0027Delete\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Message \u0027Address successfully deleted!\u0027 displayed on the page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://prod-kurs.coderslab.pl/index.php",
      "offset": 5
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.openPageInBrowser(String)"
});
formatter.result({
  "duration": 2903870700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickSignInLink()"
});
formatter.result({
  "duration": 451432300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1@testsome.com",
      "offset": 13
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterEmail(String)"
});
formatter.result({
  "duration": 191883700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass887££",
      "offset": 16
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterPassword(String)"
});
formatter.result({
  "duration": 184713000,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickSignInButton()"
});
formatter.result({
  "duration": 747400600,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickAddressesLink()"
});
formatter.result({
  "duration": 461414400,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickCreateNewAddressLink()"
});
formatter.result({
  "duration": 424234600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 13
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterAlias(String)"
});
formatter.result({
  "duration": 69200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colney 3",
      "offset": 15
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterAddress(String)"
});
formatter.result({
  "duration": 92300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E1522N",
      "offset": 23
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterPostalCode(String)"
});
formatter.result({
  "duration": 81700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leeds",
      "offset": 12
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterCity(String)"
});
formatter.result({
  "duration": 70000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 16
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.chooseCountry(String)"
});
formatter.result({
  "duration": 74500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "788545265",
      "offset": 20
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterPhoneNumber(String)"
});
formatter.result({
  "duration": 109000,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.fillTheForm()"
});
formatter.result({
  "duration": 1641874800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickSaveButton()"
});
formatter.result({
  "duration": 519909700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.dataDisplayedInBrowser()"
});
formatter.result({
  "duration": 522115800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickDeleteLink()"
});
formatter.result({
  "duration": 573287100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.addressDeletedMessageDisplayed()"
});
formatter.result({
  "duration": 45077500,
  "status": "passed"
});
});