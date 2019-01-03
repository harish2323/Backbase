package StepDefinition;
import Pages.CreateComputerPage;
import Pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import StepDefinition.BaseTest;

import static java.lang.Thread.sleep;
import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertEquals;
/**
 * Created by Harish19 on 3/01/2019.
 */
public class CreateComputerSteps extends CreateComputerPage{

    private static int computer_count;
    public CreateComputerSteps() {
           super(BaseTest.driver);
          }


    @And("^I click the create computer button$")
    public void iClickTheFilterButton() throws Throwable {
        HomePage.ADD_COMPUTER_BUTTON.click();
       // Thread.sleep(10000);
      // CreateComputerPage.COMPANY_NAME.click();

    }


    @And("^I enter the computer details (.*?),(.*?),(.*?),(.*?)$")
    public void iEnterTheComputerDetails(String computer_name,String introduced_date,String discontinued_date,String company_name) throws Throwable {
        CreateComputerPage.COMPUTER_NAME.clear();
        CreateComputerPage.COMPUTER_NAME.sendKeys(computer_name);
        CreateComputerPage.INTRODUCED_DATE.clear();
       CreateComputerPage.INTRODUCED_DATE.sendKeys(introduced_date);
        CreateComputerPage.DISCONTINUED_DATE.clear();
        CreateComputerPage.DISCONTINUED_DATE.sendKeys(discontinued_date);
        CreateComputerPage.COMPANY_NAME.sendKeys(company_name);
    }

    @And("^I click the create this computer button$")
    public void iClickTheCreateThisComputerButton() throws Throwable {
        CreateComputerPage.CREATE_THIS_COMPUTER_BUTTON.click();
    }

    @Then("I verify success message for (.*?) is displayed")
    public void iVerifyCreateComputerSuccessMessageIsDisplayed(String computer_name) throws Throwable {
       assertTrue("Computer created success message should be displayed",HomePage.ALERT_TEXT.getText().equals("Done! Computer "+computer_name+" has been created"));

    }

    @Then("I verify success message for (.*?) is not displayed")
    public void iVerifyCreateComputerSuccessMessageIsNotDisplayed(String computer_name) throws Throwable {
        boolean result=false;
        try
        {
            HomePage.ALERT_TEXT.isDisplayed();
            result=false;
        }
        catch(Exception e)
        {
            result=true;
        }
        assertTrue("Success message should not be displayed",result);

    }
    @Then("I verify (.*?) updated successfully is displayed")
    public void VerifyUpdateComputerSuccessMessage(String computer_name) throws Throwable {
        assertTrue("Computer updated success message should be displayed",HomePage.ALERT_TEXT.getText().equals("Done! Computer "+computer_name+" has been updated"));

    }



    @And("^I note down the computer count$")
    public void iNoteDownTheComputerCount() throws Throwable {
        computer_count= HomePage.computercount();
    }

    @And("^The computer count is increased by one$")
    public void theComputerCountIsIncreasedByOne() throws Throwable {
        assertTrue((HomePage.computercount()-computer_count)==1);
    }

    @Then("^The computer count is not increased by one$")
    public void theComputerCountIsNotIncreasedByOne() throws Throwable {
        assertTrue((HomePage.computercount()==computer_count));
    }

    @And("^I click the cancel button$")
    public void iClickTheCancelButton() throws Throwable {
        CreateComputerPage.CANCEL_BUTTON.click();
    }

    @And("^I verify the computer name field is highlighted in red$")
    public void iVerifyTheComputerNameFieldIsHighlightedInRed() throws Throwable {
        assertTrue(CreateComputerPage.FIELD_ERROR_RED.getText().equals("Computer name"));
    }

    @And("^I verify the introduced date field is highlighted in red$")
    public void iVerifyTheIntroducedDateFieldIsHighlightedInRed() throws Throwable {
        assertTrue(CreateComputerPage.FIELD_ERROR_RED.getText().equals("Introduced date"));

    }

    @And("^I verify the discontinued date field is highlighted in red$")
    public void iVerifyTheDiscontinuedDateFieldIsHighlightedInRed() throws Throwable {
        assertTrue(CreateComputerPage.FIELD_ERROR_RED.getText().equals("Discontinued date"));

    }
}
