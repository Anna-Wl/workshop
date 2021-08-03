$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/cucumber.features/register-account.feature");
formatter.feature({
  "line": 1,
  "name": "Create user account",
  "description": "",
  "id": "create-user-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create user account",
  "description": "",
  "id": "create-user-account;create-user-account",
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
  "name": "Click \u0027No account Create one here\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Choose title \u0027\u003ctitle\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter name \u0027\u003cname\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter surname \u0027\u003csurname\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter email",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter birthday \u0027\u003cbirthday\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Set Receive Offers \u003creceiveOffers\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Set Newsletter \u003cnewsletter\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Fill the form",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click \u0027Save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User name displayed in a browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "create-user-account;create-user-account;",
  "rows": [
    {
      "cells": [
        "title",
        "name",
        "surname",
        "password",
        "birthday",
        "receiveOffers",
        "newsletter"
      ],
      "line": 20,
      "id": "create-user-account;create-user-account;;1"
    },
    {
      "cells": [
        "Mrs",
        "Jan",
        "Kowalski",
        "pass123",
        "02/12/1988",
        "true",
        "true"
      ],
      "line": 21,
      "id": "create-user-account;create-user-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Create user account",
  "description": "",
  "id": "create-user-account;create-user-account;;2",
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
  "name": "Click \u0027No account Create one here\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Choose title \u0027Mrs\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter name \u0027Jan\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter surname \u0027Kowalski\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter email",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter password \u0027pass123\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter birthday \u002702/12/1988\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Set Receive Offers true",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Set Newsletter true",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Fill the form",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click \u0027Save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User name displayed in a browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://prod-kurs.coderslab.pl/index.php",
      "offset": 5
    }
  ],
  "location": "RegisterAccountPageObjSteps.openPageInBrowser(String)"
});
formatter.result({
  "duration": 4077586600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAccountPageObjSteps.clickSignInLink()"
});
formatter.result({
  "duration": 438041300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAccountPageObjSteps.clickCreateAccountLink()"
});
formatter.result({
  "duration": 432856100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 14
    }
  ],
  "location": "RegisterAccountPageObjSteps.chooseTitle(String)"
});
formatter.result({
  "duration": 92400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan",
      "offset": 12
    }
  ],
  "location": "RegisterAccountPageObjSteps.enterName(String)"
});
formatter.result({
  "duration": 75200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kowalski",
      "offset": 15
    }
  ],
  "location": "RegisterAccountPageObjSteps.enterSurname(String)"
});
formatter.result({
  "duration": 72600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAccountPageObjSteps.enterEmail()"
});
formatter.result({
  "duration": 421700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass123",
      "offset": 16
    }
  ],
  "location": "RegisterAccountPageObjSteps.enterPassword(String)"
});
formatter.result({
  "duration": 68500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02/12/1988",
      "offset": 16
    }
  ],
  "location": "RegisterAccountPageObjSteps.enterBirthday(String)"
});
formatter.result({
  "duration": 64700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 19
    }
  ],
  "location": "RegisterAccountPageObjSteps.setReceiveOffers(boolean)"
});
formatter.result({
  "duration": 926100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 15
    }
  ],
  "location": "RegisterAccountPageObjSteps.setNewsletter(boolean)"
});
formatter.result({
  "duration": 64100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAccountPageObjSteps.fillTheForm()"
});
formatter.result({
  "duration": 1686506700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAccountPageObjSteps.saveForm()"
});
formatter.result({
  "duration": 727728400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAccountPageObjSteps.userNameDisplayed()"
});
formatter.result({
  "duration": 46804800,
  "status": "passed"
});
});