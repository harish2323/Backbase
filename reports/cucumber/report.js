$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DeleteComputer.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the delete computer functionality",
  "description": "",
  "id": "verify-the-delete-computer-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DeleteComputer"
    }
  ]
});
formatter.scenarioOutline({
  "line": 37,
  "name": "delete computer and verify its not shown in filter results",
  "description": "",
  "id": "verify-the-delete-computer-functionality;delete-computer-and-verify-its-not-shown-in-filter-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@DEL_003"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I enter the \u003cComputer name\u003e in the filter text box",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on the \u003cComputer name\u003e in the result",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click the delete this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter the \u003cComputer name\u003e in the filter text box",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I verify no results are displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "verify-the-delete-computer-functionality;delete-computer-and-verify-its-not-shown-in-filter-results;",
  "rows": [
    {
      "cells": [
        "Computer name"
      ],
      "line": 47,
      "id": "verify-the-delete-computer-functionality;delete-computer-and-verify-its-not-shown-in-filter-results;;1"
    },
    {
      "cells": [
        "Melbourne99"
      ],
      "line": 48,
      "id": "verify-the-delete-computer-functionality;delete-computer-and-verify-its-not-shown-in-filter-results;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8912763509,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I load the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create the computer if it does not exist",
  "rows": [
    {
      "cells": [
        "Computer name",
        "Introduced date",
        "Discontinued date",
        "Company name"
      ],
      "line": 7
    },
    {
      "cells": [
        "Melbourne99",
        "2012-12-12",
        "2013-12-12",
        "RCA"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I note down the computer count",
  "keyword": "And "
});
formatter.match({
  "location": "FilterComputerSteps.I_load_the_home_page()"
});
formatter.result({
  "duration": 2033641754,
  "status": "passed"
});
formatter.match({
  "location": "UpdateComputerSteps.Icreatecomputer(DataTable)"
});
formatter.result({
  "duration": 5553135909,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iNoteDownTheComputerCount()"
});
formatter.result({
  "duration": 193290968,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "delete computer and verify its not shown in filter results",
  "description": "",
  "id": "verify-the-delete-computer-functionality;delete-computer-and-verify-its-not-shown-in-filter-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@DEL_003"
    },
    {
      "line": 1,
      "name": "@DeleteComputer"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I enter the Melbourne99 in the filter text box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on the Melbourne99 in the result",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click the delete this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter the Melbourne99 in the filter text box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I verify no results are displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne99",
      "offset": 12
    }
  ],
  "location": "FilterComputerSteps.iEnterTheComputerNameInTheFilterTextBox(String)"
});
formatter.result({
  "duration": 632334457,
  "status": "passed"
});
formatter.match({
  "location": "FilterComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 613501981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne99",
      "offset": 15
    }
  ],
  "location": "UpdateComputerSteps.iClickOnTheComputerNameInTheResult(String)"
});
formatter.result({
  "duration": 884154374,
  "status": "passed"
});
formatter.match({
  "location": "UpdateComputerSteps.iClickTheDeleteThisComputerButton()"
});
formatter.result({
  "duration": 994751249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne99",
      "offset": 12
    }
  ],
  "location": "FilterComputerSteps.iEnterTheComputerNameInTheFilterTextBox(String)"
});
formatter.result({
  "duration": 736479365,
  "status": "passed"
});
formatter.match({
  "location": "FilterComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 837280261,
  "status": "passed"
});
formatter.match({
  "location": "FilterComputerSteps.iVerifyNoResultsAreDisplayed()"
});
formatter.result({
  "duration": 244106776,
  "status": "passed"
});
formatter.after({
  "duration": 1676412737,
  "status": "passed"
});
});