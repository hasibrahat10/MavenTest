$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("home.feature");
formatter.feature({
  "line": 1,
  "name": "Home features",
  "description": "",
  "id": "home-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 23582376899,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I want to see home page",
  "description": "",
  "id": "home-features;i-want-to-see-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tk"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I go to the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should see home page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStep.iStartBrowser()"
});
formatter.result({
  "duration": 308009400,
  "status": "passed"
});
formatter.match({
  "location": "HomeStep.i_should_see_home_page()"
});
formatter.result({
  "duration": 53003200,
  "status": "passed"
});
formatter.after({
  "duration": 734966400,
  "status": "passed"
});
});