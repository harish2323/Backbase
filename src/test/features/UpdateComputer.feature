@UpdateComputer
Feature: Verify the update computer functionality

  Background:
    Given I load the home page
    And   I note down the computer count
    And I delete the computer if it exists
      |Computer name |
      | Melbourne99  |
    And I delete the computer if it exists
      |Computer name |
      | Sydney99     |

  @UPDATE_001 @UPDATE_002 @UPDATE_003 @UPDATE_004 @UPDATE_006
  Scenario Outline: update computer
    And I create the computer if it does not exist
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne99  | 2012-12-12      | 2013-12-12        | RCA          |
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    And I click on the <Computer name> in the result
    And  I enter the computer details <New Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And  I click the save this computer button
    Then I verify <New Computer name> updated successfully is displayed

    Examples:
        |Computer name | Introduced date | Discontinued date | Company name | New Computer name |
        | Melbourne99  | 2011-12-12      | 2014-12-12        | Netronics    | Sydney99          |

  @UPDATE_005
  Scenario Outline: verify the computer is not updated when the operation is cancelled
    And I create the computer if it does not exist
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne99  | 2012-12-12      | 2013-12-12        | Netronics    |
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    And I click on the <Computer name> in the result
    And  I enter the computer details <New Computer name>,<New Introduced date>,<New Discontinued date>,<New Company name>
    And  I click the cancel button
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    Then I verify the result contains <Computer name>,<Introduced date>,<Discontinued date>,<Company name>


    Examples:
      |Computer name | Introduced date | Discontinued date | Company name | New Computer name |New Introduced date | New Discontinued date| New Company name|
      | Melbourne99  | 2012-12-12      | 2013-12-12        | Netronics    | Sydney99          | 2013-12-12         | 2014-12-12           | RCA             |


  @UPDATE_007
  Scenario Outline: Update should not be allowed if there is no computer name entered.
    And I create the computer if it does not exist
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne99  | 2012-12-12      | 2013-12-12        | RCA          |
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    And I click on the <Computer name> in the result
    And  I enter the computer details <New Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And  I click the save this computer button
    And  I verify the computer name field is highlighted in red
    And  I click the cancel button
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    Then I verify the result contains <Computer name>,<Introduced date>,<Discontinued date>,<Company name>


    Examples:
      |Computer name | Introduced date | Discontinued date | Company name | New Computer name |
      | Melbourne99  | 2012-12-12      | 2013-12-12        | RCA          |                   |

  @UPDATE_008,@UPDATE_009
  Scenario Outline: Update should not be allowed if there introduced date is in future to the discontinued date
    And I create the computer if it does not exist
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne99  | 2012-12-12      | 2013-12-12        | RCA          |
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    And I click on the <Computer name> in the result
    And  I enter the computer details <Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And  I click the save this computer button
    Then I verify success message for <Computer name> is not displayed

    Examples:
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne99  | 2016-12-12      | 2013-12-12        | RCA          |

  @UPDATE_010 @UPDATE_011 @UPDATE014
  Scenario Outline: Update should not be allowed if there dates are invalid.
    And I create the computer if it does not exist
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne99  | 2012-12-12      | 2013-12-12        | RCA          |
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    And I click on the <Computer name> in the result
    And  I enter the computer details <New Computer name>,<Invalid Introduced date>,<Invalid Discontinued date>,<Company name>
    And  I click the save this computer button
    And  I verify the computer name field is highlighted in red
    And  I verify the introduced date field is highlighted in red
    And  I verify the discontinued date field is highlighted in red
    And  I click the cancel button
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    Then I verify the result contains <Computer name>,<Introduced date>,<Discontinued date>,<Company name>


    Examples:
      |Computer name | Introduced date | Discontinued date | Company name | New Computer name | Invalid Introduced date | Invalid Discontinued date |
      | Melbourne99  | 2012-12-12      |  2013-12-12       | RCA          |                   | 2012/12/12              | 2012-99-12                |

  @UPDATE_013
  Scenario Outline: Update should not be allowed if the new computer name already exists.
    And I create the computer if it does not exist
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne99  | 2012-12-12      | 2013-12-12        | RCA          |
    And I create the computer if it does not exist
      |Computer name | Introduced date | Discontinued date | Company name |
      | Sydney99  | 2012-12-12      | 2013-12-12        | RCA          |
    And I enter the <New Computer name> in the filter text box
    And I click the filter button
    And I click on the <Computer name> in the result
    And  I enter the computer details <New Computer name>,<Introduced date>,<Discontinued date>,<Company name>
    And  I click the save this computer button
    Then I verify success message for <Computer name> is not displayed

    Examples:
      |Computer name | Introduced date | Discontinued date | Company name | New Computer name |
      | Melbourne99  | 2011-12-12      | 2014-12-12        | Netronics    | Sydney99          |