@DeleteComputer
Feature: Verify the delete computer functionality

  Background:
    Given I load the home page
    And   I create the computer if it does not exist
      |Computer name | Introduced date | Discontinued date | Company name |
      | Melbourne99  | 2012-12-12      | 2013-12-12        | RCA          |
    And   I note down the computer count
    @DEL_001
    Scenario Outline: delete computer
      And I enter the <Computer name> in the filter text box
      And I click the filter button
      And I click on the <Computer name> in the result
      And I click the delete this computer button
      Then I verify delete message for <Computer name> is displayed


      Examples:
        |Computer name |
        | Melbourne99  |

  @DEL_002
  Scenario Outline: delete computer and verify the computer count is decreased by one
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    And I click on the <Computer name> in the result
    And I click the delete this computer button
    Then I verify delete message for <Computer name> is displayed
    And  The computer count is decreased by one

    Examples:
      |Computer name |
      | Melbourne99  |

  @DEL_003
  Scenario Outline: delete computer and verify its not shown in filter results
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    And I click on the <Computer name> in the result
    And I click the delete this computer button
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    Then I verify no results are displayed

    Examples:
      |Computer name |
      | Melbourne99  |