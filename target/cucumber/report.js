$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login1.feature");
formatter.feature({
  "line": 1,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Verify home page label",
  "description": "",
  "id": "title-of-your-feature;verify-home-page-label",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "member is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "home page label verification",
  "keyword": "Then "
});
formatter.match({
  "location": "CommenSteps.login()"
});
formatter.result({
  "duration": 12547810109,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.labels()"
});
formatter.result({
  "duration": 6484536833,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Registration flow",
  "description": "",
  "id": "title-of-your-feature;registration-flow",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "member is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "navigated to \"home page\" page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"Sign in securely\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \"Create your Amazon account\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter \"\u003cName\u003e\" into \"customer_name\" textbox",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter \"\u003cPhoneNo\u003e\" into \"phone_number\" textbox",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 17,
      "value": "#And navigated to \"home page\" page successfully"
    },
    {
      "line": 18,
      "value": "#\t  And click on \"Sign in securely\" button"
    },
    {
      "line": 19,
      "value": "#\t  And click on \"Create your Amazon account\" button"
    },
    {
      "line": 20,
      "value": "#And click on \"Create a free business account\" link"
    },
    {
      "line": 21,
      "value": "#"
    }
  ],
  "line": 22,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;registration-flow;",
  "rows": [
    {
      "cells": [
        "Name",
        "PhoneNo"
      ],
      "line": 23,
      "id": "title-of-your-feature;registration-flow;;1"
    },
    {
      "cells": [
        "xyz",
        "9866754432"
      ],
      "line": 24,
      "id": "title-of-your-feature;registration-flow;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Registration flow",
  "description": "",
  "id": "title-of-your-feature;registration-flow;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "member is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "navigated to \"home page\" page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"Sign in securely\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \"Create your Amazon account\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter \"xyz\" into \"customer_name\" textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter \"9866754432\" into \"phone_number\" textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommenSteps.login()"
});
formatter.result({
  "duration": 25259809093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"home page\"",
      "offset": 13
    }
  ],
  "location": "CommenSteps.homePage(String)"
});
formatter.result({
  "duration": 10291607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"Sign in securely\"",
      "offset": 9
    }
  ],
  "location": "CommenSteps.clickButton(String)"
});
formatter.result({
  "duration": 6819075272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"Create your Amazon account\"",
      "offset": 9
    }
  ],
  "location": "CommenSteps.clickButton(String)"
});
formatter.result({
  "duration": 2381436921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"xyz\"",
      "offset": 6
    },
    {
      "val": "\"customer_name\"",
      "offset": 17
    }
  ],
  "location": "CommenSteps.enterText(String,String)"
});
formatter.result({
  "duration": 244742902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"9866754432\"",
      "offset": 6
    },
    {
      "val": "\"phone_number\"",
      "offset": 24
    }
  ],
  "location": "CommenSteps.enterText(String,String)"
});
formatter.result({
  "duration": 459971568,
  "status": "passed"
});
});