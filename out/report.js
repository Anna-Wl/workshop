$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/cucumber.features/login-add-address.feature");
formatter.feature({
  "line": 1,
  "name": "Login user and add new address",
  "description": "",
  "id": "login-user-and-add-new-address",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login user and add address",
  "description": "",
  "id": "login-user-and-add-new-address;login-user-and-add-address",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "Enter email \u0027test@testshop.com\u0027 and password \u0027Padqwe1$\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click \u0027Sing in\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click \u0027Addresses\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click \u0027Create new address\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter alias \u0027Mr\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter address \u0027Polna 23\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter zip/postal code \u002755-100\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter city \u0027London\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose country \u0027United Kingdom\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter phone number \u0027668956224\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Fill the form",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click \u0027Save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click \u0027Register\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Data displayed in a browser",
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
  "duration": 4184287100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickSignInLink()"
});
formatter.result({
  "duration": 473756900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@testshop.com",
      "offset": 13
    },
    {
      "val": "Padqwe1$",
      "offset": 46
    }
  ],
  "location": "MyStoreLoginAddAddressPageObjSteps.enterEmailAndPassword(String,String)"
});
formatter.result({
  "duration": 453878401,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickSignInButton()"
});
formatter.result({
  "duration": 656809600,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickAddressesLink()"
});
formatter.result({
  "duration": 390603700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickCreateNewAddressLink()"
});
formatter.result({
  "duration": 408591600,
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
  "duration": 71101,
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
  "duration": 78600,
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
  "duration": 70601,
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
  "duration": 93600,
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
  "duration": 81300,
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
  "duration": 58400,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.fillTheForm()"
});
formatter.result({
  "duration": 1188689501,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreLoginAddAddressPageObjSteps.clickSaveButton()"
});
formatter.result({
  "duration": 474310500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});