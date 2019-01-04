$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateComputer.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the create computer functionality",
  "description": "",
  "id": "verify-the-create-computer-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CreateComputer"
    }
  ]
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Filter computer functionality for valid results",
  "description": "",
  "id": "verify-the-create-computer-functionality;filter-computer-functionality-for-valid-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@CREATE_001"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter the computer details \u003cComputer name\u003e,\u003cIntroduced date\u003e,\u003cDiscontinued date\u003e,\u003cCompany name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify success message for \u003cComputer name\u003e is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "verify-the-create-computer-functionality;filter-computer-functionality-for-valid-results;",
  "rows": [
    {
      "cells": [
        "Computer name",
        "Introduced date",
        "Discontinued date",
        "Company name"
      ],
      "line": 17,
      "id": "verify-the-create-computer-functionality;filter-computer-functionality-for-valid-results;;1"
    },
    {
      "cells": [
        "Melbourne001",
        "2012-12-12",
        "2013-12-12",
        "RCA"
      ],
      "line": 18,
      "id": "verify-the-create-computer-functionality;filter-computer-functionality-for-valid-results;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7904158673,
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
  "name": "I note down the computer count",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the create computer button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterComputerSteps.I_load_the_home_page()"
});
formatter.result({
  "duration": 2111503060,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iNoteDownTheComputerCount()"
});
formatter.result({
  "duration": 246117168,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 835590445,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Filter computer functionality for valid results",
  "description": "",
  "id": "verify-the-create-computer-functionality;filter-computer-functionality-for-valid-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@CREATE_001"
    },
    {
      "line": 1,
      "name": "@CreateComputer"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter the computer details Melbourne001,2012-12-12,2013-12-12,RCA",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify success message for Melbourne001 is displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne001",
      "offset": 29
    },
    {
      "val": "2012-12-12",
      "offset": 42
    },
    {
      "val": "2013-12-12",
      "offset": 53
    },
    {
      "val": "RCA",
      "offset": 64
    }
  ],
  "location": "CreateComputerSteps.iEnterTheComputerDetails(String,String,String,String)"
});
formatter.result({
  "duration": 1617079028,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheCreateThisComputerButton()"
});
formatter.result({
  "duration": 878456454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne001",
      "offset": 29
    }
  ],
  "location": "CreateComputerSteps.iVerifyCreateComputerSuccessMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 162552509,
  "status": "passed"
});
formatter.after({
  "duration": 886980392,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Filter computer functionality for valid results",
  "description": "",
  "id": "verify-the-create-computer-functionality;filter-computer-functionality-for-valid-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@CREATE_002"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter the computer details \u003cComputer name\u003e,\u003cIntroduced date\u003e,\u003cDiscontinued date\u003e,\u003cCompany name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify success message for \u003cComputer name\u003e is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "The computer count is increased by one",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "verify-the-create-computer-functionality;filter-computer-functionality-for-valid-results;",
  "rows": [
    {
      "cells": [
        "Computer name",
        "Introduced date",
        "Discontinued date",
        "Company name"
      ],
      "line": 28,
      "id": "verify-the-create-computer-functionality;filter-computer-functionality-for-valid-results;;1"
    },
    {
      "cells": [
        "Melbourne002",
        "2012-12-12",
        "2013-12-12",
        "RCA"
      ],
      "line": 29,
      "id": "verify-the-create-computer-functionality;filter-computer-functionality-for-valid-results;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4311658941,
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
  "name": "I note down the computer count",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the create computer button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterComputerSteps.I_load_the_home_page()"
});
formatter.result({
  "duration": 1573280874,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iNoteDownTheComputerCount()"
});
formatter.result({
  "duration": 215180688,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 595311260,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Filter computer functionality for valid results",
  "description": "",
  "id": "verify-the-create-computer-functionality;filter-computer-functionality-for-valid-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@CREATE_002"
    },
    {
      "line": 1,
      "name": "@CreateComputer"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter the computer details Melbourne002,2012-12-12,2013-12-12,RCA",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify success message for Melbourne002 is displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "The computer count is increased by one",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne002",
      "offset": 29
    },
    {
      "val": "2012-12-12",
      "offset": 42
    },
    {
      "val": "2013-12-12",
      "offset": 53
    },
    {
      "val": "RCA",
      "offset": 64
    }
  ],
  "location": "CreateComputerSteps.iEnterTheComputerDetails(String,String,String,String)"
});
formatter.result({
  "duration": 1578989057,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheCreateThisComputerButton()"
});
formatter.result({
  "duration": 1113156049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne002",
      "offset": 29
    }
  ],
  "location": "CreateComputerSteps.iVerifyCreateComputerSuccessMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 161010605,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.theComputerCountIsIncreasedByOne()"
});
formatter.result({
  "duration": 121998751,
  "status": "passed"
});
formatter.after({
  "duration": 967049507,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "create a computer and verify if it appears in filter results",
  "description": "",
  "id": "verify-the-create-computer-functionality;create-a-computer-and-verify-if-it-appears-in-filter-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@CREATE_003,CREATE_004"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I enter the computer details \u003cComputer name\u003e,\u003cIntroduced date\u003e,\u003cDiscontinued date\u003e,\u003cCompany name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify success message for \u003cComputer name\u003e is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I enter the \u003cComputer name\u003e in the filter text box",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I verify the result contains \u003cComputer name\u003e,\u003cIntroduced date\u003e,\u003cDiscontinued date\u003e,\u003cCompany name\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "verify-the-create-computer-functionality;create-a-computer-and-verify-if-it-appears-in-filter-results;",
  "rows": [
    {
      "cells": [
        "Computer name",
        "Introduced date",
        "Discontinued date",
        "Company name"
      ],
      "line": 42,
      "id": "verify-the-create-computer-functionality;create-a-computer-and-verify-if-it-appears-in-filter-results;;1"
    },
    {
      "cells": [
        "Melbourne003",
        "2012-12-12",
        "2013-12-12",
        "RCA"
      ],
      "line": 43,
      "id": "verify-the-create-computer-functionality;create-a-computer-and-verify-if-it-appears-in-filter-results;;2"
    },
    {
      "cells": [
        "Melbourne004",
        "",
        "",
        ""
      ],
      "line": 44,
      "id": "verify-the-create-computer-functionality;create-a-computer-and-verify-if-it-appears-in-filter-results;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4300097682,
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
  "name": "I note down the computer count",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the create computer button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterComputerSteps.I_load_the_home_page()"
});
formatter.result({
  "duration": 1579845738,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iNoteDownTheComputerCount()"
});
formatter.result({
  "duration": 195437801,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 577473717,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "create a computer and verify if it appears in filter results",
  "description": "",
  "id": "verify-the-create-computer-functionality;create-a-computer-and-verify-if-it-appears-in-filter-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@CREATE_003,CREATE_004"
    },
    {
      "line": 1,
      "name": "@CreateComputer"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I enter the computer details Melbourne003,2012-12-12,2013-12-12,RCA",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify success message for Melbourne003 is displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I enter the Melbourne003 in the filter text box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I verify the result contains Melbourne003,2012-12-12,2013-12-12,RCA",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne003",
      "offset": 29
    },
    {
      "val": "2012-12-12",
      "offset": 42
    },
    {
      "val": "2013-12-12",
      "offset": 53
    },
    {
      "val": "RCA",
      "offset": 64
    }
  ],
  "location": "CreateComputerSteps.iEnterTheComputerDetails(String,String,String,String)"
});
formatter.result({
  "duration": 1621037024,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheCreateThisComputerButton()"
});
formatter.result({
  "duration": 1129434181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne003",
      "offset": 29
    }
  ],
  "location": "CreateComputerSteps.iVerifyCreateComputerSuccessMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 165083912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne003",
      "offset": 12
    }
  ],
  "location": "FilterComputerSteps.iEnterTheComputerNameInTheFilterTextBox(String)"
});
formatter.result({
  "duration": 340001232,
  "status": "passed"
});
formatter.match({
  "location": "FilterComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 589997308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne003",
      "offset": 29
    },
    {
      "val": "2012-12-12",
      "offset": 42
    },
    {
      "val": "2013-12-12",
      "offset": 53
    },
    {
      "val": "RCA",
      "offset": 64
    }
  ],
  "location": "FilterComputerSteps.iVerifyTheResultContains(String,String,String,String)"
});
formatter.result({
  "duration": 718271136,
  "status": "passed"
});
formatter.after({
  "duration": 940522605,
  "status": "passed"
});
formatter.before({
  "duration": 4268426474,
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
  "name": "I note down the computer count",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the create computer button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterComputerSteps.I_load_the_home_page()"
});
formatter.result({
  "duration": 1690575431,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iNoteDownTheComputerCount()"
});
formatter.result({
  "duration": 202862966,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 573538059,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "create a computer and verify if it appears in filter results",
  "description": "",
  "id": "verify-the-create-computer-functionality;create-a-computer-and-verify-if-it-appears-in-filter-results;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@CREATE_003,CREATE_004"
    },
    {
      "line": 1,
      "name": "@CreateComputer"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I enter the computer details Melbourne004,,,",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify success message for Melbourne004 is displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I enter the Melbourne004 in the filter text box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I verify the result contains Melbourne004,,,",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne004",
      "offset": 29
    },
    {
      "val": "",
      "offset": 42
    },
    {
      "val": "",
      "offset": 43
    },
    {
      "val": "",
      "offset": 44
    }
  ],
  "location": "CreateComputerSteps.iEnterTheComputerDetails(String,String,String,String)"
});
formatter.result({
  "duration": 1403464997,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheCreateThisComputerButton()"
});
formatter.result({
  "duration": 928018334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne004",
      "offset": 29
    }
  ],
  "location": "CreateComputerSteps.iVerifyCreateComputerSuccessMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 156823195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne004",
      "offset": 12
    }
  ],
  "location": "FilterComputerSteps.iEnterTheComputerNameInTheFilterTextBox(String)"
});
formatter.result({
  "duration": 320835502,
  "status": "passed"
});
formatter.match({
  "location": "FilterComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 545217502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne004",
      "offset": 29
    },
    {
      "val": "",
      "offset": 42
    },
    {
      "val": "",
      "offset": 43
    },
    {
      "val": "",
      "offset": 44
    }
  ],
  "location": "FilterComputerSteps.iVerifyTheResultContains(String,String,String,String)"
});
formatter.result({
  "duration": 717797818,
  "status": "passed"
});
formatter.after({
  "duration": 921993197,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "check of computer name field error when its empty and cancel adding computer",
  "description": "",
  "id": "verify-the-create-computer-functionality;check-of-computer-name-field-error-when-its-empty-and-cancel-adding-computer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@CREATE_005"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I enter the computer details \u003cComputer name\u003e,\u003cIntroduced date\u003e,\u003cDiscontinued date\u003e,\u003cCompany name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I verify the computer name field is highlighted in red",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click the cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "The computer count is not increased by one",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "verify-the-create-computer-functionality;check-of-computer-name-field-error-when-its-empty-and-cancel-adding-computer;",
  "rows": [
    {
      "cells": [
        "Computer name",
        "Introduced date",
        "Discontinued date",
        "Company name"
      ],
      "line": 55,
      "id": "verify-the-create-computer-functionality;check-of-computer-name-field-error-when-its-empty-and-cancel-adding-computer;;1"
    },
    {
      "cells": [
        "",
        "2012-12-12",
        "2013-12-12",
        "RCA"
      ],
      "line": 56,
      "id": "verify-the-create-computer-functionality;check-of-computer-name-field-error-when-its-empty-and-cancel-adding-computer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4491834672,
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
  "name": "I note down the computer count",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the create computer button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterComputerSteps.I_load_the_home_page()"
});
formatter.result({
  "duration": 2307924323,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iNoteDownTheComputerCount()"
});
formatter.result({
  "duration": 207573802,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 808869146,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "check of computer name field error when its empty and cancel adding computer",
  "description": "",
  "id": "verify-the-create-computer-functionality;check-of-computer-name-field-error-when-its-empty-and-cancel-adding-computer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@CREATE_005"
    },
    {
      "line": 1,
      "name": "@CreateComputer"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I enter the computer details ,2012-12-12,2013-12-12,RCA",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I verify the computer name field is highlighted in red",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click the cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "The computer count is not increased by one",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    },
    {
      "val": "2012-12-12",
      "offset": 30
    },
    {
      "val": "2013-12-12",
      "offset": 41
    },
    {
      "val": "RCA",
      "offset": 52
    }
  ],
  "location": "CreateComputerSteps.iEnterTheComputerDetails(String,String,String,String)"
});
formatter.result({
  "duration": 1458801469,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheCreateThisComputerButton()"
});
formatter.result({
  "duration": 591637013,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iVerifyTheComputerNameFieldIsHighlightedInRed()"
});
formatter.result({
  "duration": 94842772,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheCancelButton()"
});
formatter.result({
  "duration": 815825824,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.theComputerCountIsNotIncreasedByOne()"
});
formatter.result({
  "duration": 110255773,
  "status": "passed"
});
formatter.after({
  "duration": 914990636,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "check if the computer count is not increased by one when create computer action is cancelled",
  "description": "",
  "id": "verify-the-create-computer-functionality;check-if-the-computer-count-is-not-increased-by-one-when-create-computer-action-is-cancelled",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@CREATE_006"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "I enter the computer details \u003cComputer name\u003e,\u003cIntroduced date\u003e,\u003cDiscontinued date\u003e,\u003cCompany name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click the cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I enter the \u003cComputer name\u003e in the filter text box",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "The computer count is not increased by one",
  "keyword": "Then "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "verify-the-create-computer-functionality;check-if-the-computer-count-is-not-increased-by-one-when-create-computer-action-is-cancelled;",
  "rows": [
    {
      "cells": [
        "Computer name",
        "Introduced date",
        "Discontinued date",
        "Company name"
      ],
      "line": 67,
      "id": "verify-the-create-computer-functionality;check-if-the-computer-count-is-not-increased-by-one-when-create-computer-action-is-cancelled;;1"
    },
    {
      "cells": [
        "Melbourne006",
        "2012-12-12",
        "2013-12-12",
        "RCA"
      ],
      "line": 68,
      "id": "verify-the-create-computer-functionality;check-if-the-computer-count-is-not-increased-by-one-when-create-computer-action-is-cancelled;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4427121204,
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
  "name": "I note down the computer count",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the create computer button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterComputerSteps.I_load_the_home_page()"
});
formatter.result({
  "duration": 1579728011,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iNoteDownTheComputerCount()"
});
formatter.result({
  "duration": 188239030,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 588613578,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "check if the computer count is not increased by one when create computer action is cancelled",
  "description": "",
  "id": "verify-the-create-computer-functionality;check-if-the-computer-count-is-not-increased-by-one-when-create-computer-action-is-cancelled;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@CREATE_006"
    },
    {
      "line": 1,
      "name": "@CreateComputer"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "I enter the computer details Melbourne006,2012-12-12,2013-12-12,RCA",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click the cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I enter the Melbourne006 in the filter text box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "The computer count is not increased by one",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne006",
      "offset": 29
    },
    {
      "val": "2012-12-12",
      "offset": 42
    },
    {
      "val": "2013-12-12",
      "offset": 53
    },
    {
      "val": "RCA",
      "offset": 64
    }
  ],
  "location": "CreateComputerSteps.iEnterTheComputerDetails(String,String,String,String)"
});
formatter.result({
  "duration": 1595460984,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheCancelButton()"
});
formatter.result({
  "duration": 577547975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne006",
      "offset": 12
    }
  ],
  "location": "FilterComputerSteps.iEnterTheComputerNameInTheFilterTextBox(String)"
});
formatter.result({
  "duration": 338188861,
  "status": "passed"
});
formatter.match({
  "location": "FilterComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 576080329,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.theComputerCountIsNotIncreasedByOne()"
});
formatter.result({
  "duration": 127938160,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(text(),\u0027computers found\u0027)]\"}\n  (Session info: headless chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027HARISH\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\Harish19\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: b9be35223883a816d9f47e8b8414a8dd\n*** Element info: {Using\u003dxpath, value\u003d//h1[contains(text(),\u0027computers found\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\r\n\tat Pages.HomePage.computercount(HomePage.java:87)\r\n\tat StepDefinition.CreateComputerSteps.theComputerCountIsNotIncreasedByOne(CreateComputerSteps.java:95)\r\n\tat ✽.Then The computer count is not increased by one(CreateComputer.feature:64)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1259876575,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 71,
  "name": "check if the computer name is not shown in filter results when create computer action is cancelled",
  "description": "",
  "id": "verify-the-create-computer-functionality;check-if-the-computer-name-is-not-shown-in-filter-results-when-create-computer-action-is-cancelled",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@CREATE_007"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I enter the computer details \u003cComputer name\u003e,\u003cIntroduced date\u003e,\u003cDiscontinued date\u003e,\u003cCompany name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I click the cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I enter the \u003cComputer name\u003e in the filter text box",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I click the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I verify no results are displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "verify-the-create-computer-functionality;check-if-the-computer-name-is-not-shown-in-filter-results-when-create-computer-action-is-cancelled;",
  "rows": [
    {
      "cells": [
        "Computer name",
        "Introduced date",
        "Discontinued date",
        "Company name"
      ],
      "line": 79,
      "id": "verify-the-create-computer-functionality;check-if-the-computer-name-is-not-shown-in-filter-results-when-create-computer-action-is-cancelled;;1"
    },
    {
      "cells": [
        "Melbourne007",
        "2012-12-12",
        "2013-12-12",
        "RCA"
      ],
      "line": 80,
      "id": "verify-the-create-computer-functionality;check-if-the-computer-name-is-not-shown-in-filter-results-when-create-computer-action-is-cancelled;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4388699790,
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
  "name": "I note down the computer count",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the create computer button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterComputerSteps.I_load_the_home_page()"
});
formatter.result({
  "duration": 1624768624,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iNoteDownTheComputerCount()"
});
formatter.result({
  "duration": 259536680,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 601978153,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "check if the computer name is not shown in filter results when create computer action is cancelled",
  "description": "",
  "id": "verify-the-create-computer-functionality;check-if-the-computer-name-is-not-shown-in-filter-results-when-create-computer-action-is-cancelled;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@CREATE_007"
    },
    {
      "line": 1,
      "name": "@CreateComputer"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I enter the computer details Melbourne007,2012-12-12,2013-12-12,RCA",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I click the cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I enter the Melbourne007 in the filter text box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I click the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I verify no results are displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne007",
      "offset": 29
    },
    {
      "val": "2012-12-12",
      "offset": 42
    },
    {
      "val": "2013-12-12",
      "offset": 53
    },
    {
      "val": "RCA",
      "offset": 64
    }
  ],
  "location": "CreateComputerSteps.iEnterTheComputerDetails(String,String,String,String)"
});
formatter.result({
  "duration": 1576929161,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheCancelButton()"
});
formatter.result({
  "duration": 588058759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne007",
      "offset": 12
    }
  ],
  "location": "FilterComputerSteps.iEnterTheComputerNameInTheFilterTextBox(String)"
});
formatter.result({
  "duration": 331503254,
  "status": "passed"
});
formatter.match({
  "location": "FilterComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 580082999,
  "status": "passed"
});
formatter.match({
  "location": "FilterComputerSteps.iVerifyNoResultsAreDisplayed()"
});
formatter.result({
  "duration": 242138646,
  "status": "passed"
});
formatter.after({
  "duration": 869188731,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 83,
  "name": "verify only unique computer name can be created.",
  "description": "",
  "id": "verify-the-create-computer-functionality;verify-only-unique-computer-name-can-be-created.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 82,
      "name": "@CREATE_008"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "I enter the computer details \u003cComputer name\u003e,\u003cIntroduced date\u003e,\u003cDiscontinued date\u003e,\u003cCompany name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I verify success message for \u003cComputer name\u003e is not displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "verify-the-create-computer-functionality;verify-only-unique-computer-name-can-be-created.;",
  "rows": [
    {
      "cells": [
        "Computer name",
        "Introduced date",
        "Discontinued date",
        "Company name"
      ],
      "line": 89,
      "id": "verify-the-create-computer-functionality;verify-only-unique-computer-name-can-be-created.;;1"
    },
    {
      "cells": [
        "Melbourne001",
        "2012-12-12",
        "2013-12-12",
        "RCA"
      ],
      "line": 90,
      "id": "verify-the-create-computer-functionality;verify-only-unique-computer-name-can-be-created.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4278341989,
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
  "name": "I note down the computer count",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the create computer button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterComputerSteps.I_load_the_home_page()"
});
formatter.result({
  "duration": 1733573051,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iNoteDownTheComputerCount()"
});
formatter.result({
  "duration": 195364750,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 601324322,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "verify only unique computer name can be created.",
  "description": "",
  "id": "verify-the-create-computer-functionality;verify-only-unique-computer-name-can-be-created.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 82,
      "name": "@CREATE_008"
    },
    {
      "line": 1,
      "name": "@CreateComputer"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "I enter the computer details Melbourne001,2012-12-12,2013-12-12,RCA",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I verify success message for Melbourne001 is not displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne001",
      "offset": 29
    },
    {
      "val": "2012-12-12",
      "offset": 42
    },
    {
      "val": "2013-12-12",
      "offset": 53
    },
    {
      "val": "RCA",
      "offset": 64
    }
  ],
  "location": "CreateComputerSteps.iEnterTheComputerDetails(String,String,String,String)"
});
formatter.result({
  "duration": 1595582331,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheCreateThisComputerButton()"
});
formatter.result({
  "duration": 839803211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne001",
      "offset": 29
    }
  ],
  "location": "CreateComputerSteps.iVerifyCreateComputerSuccessMessageIsNotDisplayed(String)"
});
formatter.result({
  "duration": 142100853,
  "error_message": "junit.framework.AssertionFailedError: Success message should not be displayed\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.TestCase.assertTrue(TestCase.java:192)\r\n\tat StepDefinition.CreateComputerSteps.iVerifyCreateComputerSuccessMessageIsNotDisplayed(CreateComputerSteps.java:67)\r\n\tat ✽.Then I verify success message for Melbourne001 is not displayed(CreateComputer.feature:86)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1309080448,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 93,
  "name": "verify computer cannot be created with introduced date in future to discontinued date",
  "description": "",
  "id": "verify-the-create-computer-functionality;verify-computer-cannot-be-created-with-introduced-date-in-future-to-discontinued-date",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@CREATE_009"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "I enter the computer details \u003cComputer name\u003e,\u003cIntroduced date\u003e,\u003cDiscontinued date\u003e,\u003cCompany name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I verify success message for \u003cComputer name\u003e is not displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 98,
  "name": "",
  "description": "",
  "id": "verify-the-create-computer-functionality;verify-computer-cannot-be-created-with-introduced-date-in-future-to-discontinued-date;",
  "rows": [
    {
      "cells": [
        "Computer name",
        "Introduced date",
        "Discontinued date",
        "Company name"
      ],
      "line": 99,
      "id": "verify-the-create-computer-functionality;verify-computer-cannot-be-created-with-introduced-date-in-future-to-discontinued-date;;1"
    },
    {
      "cells": [
        "Melbourne009",
        "2013-12-12",
        "2013-12-12",
        "RCA"
      ],
      "line": 100,
      "id": "verify-the-create-computer-functionality;verify-computer-cannot-be-created-with-introduced-date-in-future-to-discontinued-date;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4307424441,
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
  "name": "I note down the computer count",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the create computer button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterComputerSteps.I_load_the_home_page()"
});
formatter.result({
  "duration": 1623885380,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iNoteDownTheComputerCount()"
});
formatter.result({
  "duration": 190320057,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 574513068,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "verify computer cannot be created with introduced date in future to discontinued date",
  "description": "",
  "id": "verify-the-create-computer-functionality;verify-computer-cannot-be-created-with-introduced-date-in-future-to-discontinued-date;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@CREATE_009"
    },
    {
      "line": 1,
      "name": "@CreateComputer"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "I enter the computer details Melbourne009,2013-12-12,2013-12-12,RCA",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I verify success message for Melbourne009 is not displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne009",
      "offset": 29
    },
    {
      "val": "2013-12-12",
      "offset": 42
    },
    {
      "val": "2013-12-12",
      "offset": 53
    },
    {
      "val": "RCA",
      "offset": 64
    }
  ],
  "location": "CreateComputerSteps.iEnterTheComputerDetails(String,String,String,String)"
});
formatter.result({
  "duration": 1596690763,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheCreateThisComputerButton()"
});
formatter.result({
  "duration": 872987949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne009",
      "offset": 29
    }
  ],
  "location": "CreateComputerSteps.iVerifyCreateComputerSuccessMessageIsNotDisplayed(String)"
});
formatter.result({
  "duration": 132156963,
  "error_message": "junit.framework.AssertionFailedError: Success message should not be displayed\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.TestCase.assertTrue(TestCase.java:192)\r\n\tat StepDefinition.CreateComputerSteps.iVerifyCreateComputerSuccessMessageIsNotDisplayed(CreateComputerSteps.java:67)\r\n\tat ✽.Then I verify success message for Melbourne009 is not displayed(CreateComputer.feature:96)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1307894740,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 103,
  "name": "Computer cannot be added if the introduced date is invalid format",
  "description": "",
  "id": "verify-the-create-computer-functionality;computer-cannot-be-added-if-the-introduced-date-is-invalid-format",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@CREATE_010"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "I enter the computer details \u003cComputer name\u003e,\u003cIntroduced date\u003e,\u003cDiscontinued date\u003e,\u003cCompany name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I verify the introduced date field is highlighted in red",
  "keyword": "And "
});
formatter.examples({
  "line": 108,
  "name": "",
  "description": "",
  "id": "verify-the-create-computer-functionality;computer-cannot-be-added-if-the-introduced-date-is-invalid-format;",
  "rows": [
    {
      "cells": [
        "Computer name",
        "Introduced date",
        "Discontinued date",
        "Company name"
      ],
      "line": 109,
      "id": "verify-the-create-computer-functionality;computer-cannot-be-added-if-the-introduced-date-is-invalid-format;;1"
    },
    {
      "cells": [
        "Melbourne010",
        "2012/12/12",
        "2013-12-12",
        "RCA"
      ],
      "line": 110,
      "id": "verify-the-create-computer-functionality;computer-cannot-be-added-if-the-introduced-date-is-invalid-format;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4453066118,
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
  "name": "I note down the computer count",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the create computer button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterComputerSteps.I_load_the_home_page()"
});
formatter.result({
  "duration": 1605829893,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iNoteDownTheComputerCount()"
});
formatter.result({
  "duration": 183276443,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 573962476,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "Computer cannot be added if the introduced date is invalid format",
  "description": "",
  "id": "verify-the-create-computer-functionality;computer-cannot-be-added-if-the-introduced-date-is-invalid-format;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@CREATE_010"
    },
    {
      "line": 1,
      "name": "@CreateComputer"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "I enter the computer details Melbourne010,2012/12/12,2013-12-12,RCA",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I verify the introduced date field is highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne010",
      "offset": 29
    },
    {
      "val": "2012/12/12",
      "offset": 42
    },
    {
      "val": "2013-12-12",
      "offset": 53
    },
    {
      "val": "RCA",
      "offset": 64
    }
  ],
  "location": "CreateComputerSteps.iEnterTheComputerDetails(String,String,String,String)"
});
formatter.result({
  "duration": 1616766301,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheCreateThisComputerButton()"
});
formatter.result({
  "duration": 811704220,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iVerifyTheIntroducedDateFieldIsHighlightedInRed()"
});
formatter.result({
  "duration": 94253541,
  "status": "passed"
});
formatter.after({
  "duration": 918565873,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 113,
  "name": "Computer cannot be added if the discontinued date is invalid format",
  "description": "",
  "id": "verify-the-create-computer-functionality;computer-cannot-be-added-if-the-discontinued-date-is-invalid-format",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 112,
      "name": "@CREATE_011"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "I enter the computer details \u003cComputer name\u003e,\u003cIntroduced date\u003e,\u003cDiscontinued date\u003e,\u003cCompany name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I verify the discontinued date field is highlighted in red",
  "keyword": "And "
});
formatter.examples({
  "line": 118,
  "name": "",
  "description": "",
  "id": "verify-the-create-computer-functionality;computer-cannot-be-added-if-the-discontinued-date-is-invalid-format;",
  "rows": [
    {
      "cells": [
        "Computer name",
        "Introduced date",
        "Discontinued date",
        "Company name"
      ],
      "line": 119,
      "id": "verify-the-create-computer-functionality;computer-cannot-be-added-if-the-discontinued-date-is-invalid-format;;1"
    },
    {
      "cells": [
        "Melbourne010",
        "2012-12-12",
        "2013/12/12",
        "RCA"
      ],
      "line": 120,
      "id": "verify-the-create-computer-functionality;computer-cannot-be-added-if-the-discontinued-date-is-invalid-format;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4257118174,
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
  "name": "I note down the computer count",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the create computer button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterComputerSteps.I_load_the_home_page()"
});
formatter.result({
  "duration": 1618898644,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iNoteDownTheComputerCount()"
});
formatter.result({
  "duration": 184000908,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheFilterButton()"
});
formatter.result({
  "duration": 590089073,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "Computer cannot be added if the discontinued date is invalid format",
  "description": "",
  "id": "verify-the-create-computer-functionality;computer-cannot-be-added-if-the-discontinued-date-is-invalid-format;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 112,
      "name": "@CREATE_011"
    },
    {
      "line": 1,
      "name": "@CreateComputer"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "I enter the computer details Melbourne010,2012-12-12,2013/12/12,RCA",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I click the create this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I verify the discontinued date field is highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne010",
      "offset": 29
    },
    {
      "val": "2012-12-12",
      "offset": 42
    },
    {
      "val": "2013/12/12",
      "offset": 53
    },
    {
      "val": "RCA",
      "offset": 64
    }
  ],
  "location": "CreateComputerSteps.iEnterTheComputerDetails(String,String,String,String)"
});
formatter.result({
  "duration": 1591205957,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iClickTheCreateThisComputerButton()"
});
formatter.result({
  "duration": 812393670,
  "status": "passed"
});
formatter.match({
  "location": "CreateComputerSteps.iVerifyTheDiscontinuedDateFieldIsHighlightedInRed()"
});
formatter.result({
  "duration": 97062655,
  "status": "passed"
});
formatter.after({
  "duration": 910038312,
  "status": "passed"
});
});