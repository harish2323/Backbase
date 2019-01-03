@FilterComputer
Feature: Test the filter by computer name functionalities.

  Background:
    Given I load the home page

  @FIL_001,@FIL002,@FIL_003
  Scenario Outline: Filter computer functionality for valid results
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    Then I verify the result contains the <Computer name>

    @Dev
    Examples:
    |Computer name|
    | Z           |
    | BARK        |
    | 32          |

  @FIL_004
  Scenario Outline: Filter computer functionality for valid results
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    Then I verify no results are displayed

  @Dev
    Examples:
      |Computer name|
      | ZXCV        |


  @FIL_006
  Scenario Outline: Verify the computer count matches the total number of filter result rows
    And I enter the <Computer name> in the filter text box
    And I click the filter button
    Then I verify the computer count matches the total number of results

  @Dev
    Examples:
      |Computer name|
      | ACE         |