$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "# Labels verified with data file"
    }
  ],
  "line": 6,
  "name": "Verify home page label",
  "description": "",
  "id": "title-of-your-feature;verify-home-page-label",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "member is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "home page label verification",
  "keyword": "Then "
});
formatter.match({
  "location": "CommenSteps.login()"
});
formatter.result({
  "duration": 11397335545,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.labels()"
});
formatter.result({
  "duration": 3752600301,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "# Labels verified in UI"
    }
  ],
  "line": 12,
  "name": "Verifiy List of Users",
  "description": "",
  "id": "title-of-your-feature;verifiy-list-of-users",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "member is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "navigated to \"home page\" page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"List users\" link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "\"/api/users?page\u003d2\" is verified sucessfully",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \"Single user\" link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "\"/api/users/2\" is verified sucessfully",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on \"Single user not found\" link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "\"/api/users/23\" is verified sucessfully",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \"List \u003cresource\u003e\" link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "\"/api/unknown\" is verified sucessfully",
  "keyword": "And "
});
formatter.match({
  "location": "CommenSteps.login()"
});
formatter.result({
  "duration": 11390707489,
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
  "duration": 5544883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"List users\"",
      "offset": 9
    }
  ],
  "location": "CommenSteps.clickLink(String)"
});
formatter.result({
  "duration": 217374250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"/api/users?page\u003d2\"",
      "offset": 0
    }
  ],
  "location": "CommenSteps.labels(String)"
});
formatter.result({
  "duration": 164558212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"Single user\"",
      "offset": 9
    }
  ],
  "location": "CommenSteps.clickLink(String)"
});
formatter.result({
  "duration": 240794800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"/api/users/2\"",
      "offset": 0
    }
  ],
  "location": "CommenSteps.labels(String)"
});
formatter.result({
  "duration": 84962464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"Single user not found\"",
      "offset": 9
    }
  ],
  "location": "CommenSteps.clickLink(String)"
});
formatter.result({
  "duration": 146073852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"/api/users/23\"",
      "offset": 0
    }
  ],
  "location": "CommenSteps.labels(String)"
});
formatter.result({
  "duration": 102044183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"List \u003cresource\u003e\"",
      "offset": 9
    }
  ],
  "location": "CommenSteps.clickLink(String)"
});
formatter.result({
  "duration": 5749208060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"/api/unknown\"",
      "offset": 0
    }
  ],
  "location": "CommenSteps.labels(String)"
});
formatter.result({
  "duration": 171589859,
  "status": "passed"
});
});