@CreateComputer
Feature: Verify the create computer functionality

  Background:
    Given I load the home page
    And   I note down the computer count
    And   I click the create computer button


  @CREATE_001
  Scenario Outline: Filter computer functionality for valid results
    And  I enter the computer details <Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And  I click the create this computer button
    Then I verify success message for <Computer name> is displayed

    Examples:
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne001 | 2012-12-12      | 2013-12-12        | RCA          |

  @CREATE_002
  Scenario Outline: Filter computer functionality for valid results
    And   I enter the computer details <Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And   I click the create this computer button
    Then  I verify success message for <Computer name> is displayed
    And   The computer count is increased by one

    Examples:
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne002 | 2012-12-12      | 2013-12-12        | RCA          |


  @CREATE_003,CREATE_004
  Scenario Outline: create a computer and verify if it appears in filter results
    And  I enter the computer details <Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And  I click the create this computer button
    Then I verify success message for <Computer name> is displayed
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    Then I verify the result contains <Computer name>,<Introduced date>,<Discontinued date>,<Company name>

    Examples:
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne003 | 2012-12-12      | 2013-12-12        | RCA          |
      | Melbourne004 |                 |                   |              |

  @CREATE_005
  Scenario Outline: check of computer name field error when its empty and cancel adding computer
    And  I enter the computer details <Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And  I click the create this computer button
    And  I verify the computer name field is highlighted in red
    And  I click the cancel button
    Then The computer count is not increased by one

    Examples:
      |Computer name | Introduced date | Discontinued date | Company name |
      |              | 2012-12-12      | 2013-12-12        | RCA          |

  @CREATE_006
  Scenario Outline: check if the computer count is not increased by one when create computer action is cancelled
    And  I enter the computer details <Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And  I click the cancel button
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    Then The computer count is not increased by one

    Examples:
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne006 | 2012-12-12      | 2013-12-12        | RCA          |

  @CREATE_007
  Scenario Outline: check if the computer name is not shown in filter results when create computer action is cancelled
    And  I enter the computer details <Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And  I click the cancel button
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    Then I verify no results are displayed

    Examples:
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne007 | 2012-12-12      | 2013-12-12        | RCA          |

  @CREATE_008
  Scenario Outline: verify only unique computer name can be created.
    And  I enter the computer details <Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And  I click the create this computer button
    Then I verify success message for <Computer name> is not displayed

    Examples:
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne001 | 2012-12-12      | 2013-12-12        | RCA          |

  @CREATE_009
  Scenario Outline: verify computer cannot be created with introduced date in future to discontinued date
    And  I enter the computer details <Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And  I click the create this computer button
    Then I verify success message for <Computer name> is not displayed

    Examples:
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne009 | 2013-12-12      | 2013-12-12        | RCA          |

  @CREATE_010
  Scenario Outline: Computer cannot be added if the introduced date is invalid format
    And  I enter the computer details <Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And  I click the create this computer button
    And  I verify the introduced date field is highlighted in red

    Examples:
      |Computer name | Introduced date | Discontinued date | Company name |
      |Melbourne010  | 2012/12/12      | 2013-12-12        | RCA          |

  @CREATE_011
  Scenario Outline: Computer cannot be added if the discontinued date is invalid format
    And  I enter the computer details <Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And  I click the create this computer button
    And  I verify the discontinued date field is highlighted in red

    Examples:
      |Computer name | Introduced date | Discontinued date | Company name |
      |Melbourne010  | 2012-12-12      | 2013/12/12        | RCA          |