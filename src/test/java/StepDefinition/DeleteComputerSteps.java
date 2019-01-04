package StepDefinition;
import Pages.CreateComputerPage;
import Pages.HomePage;
import Pages.UpdateComputerPage;
import StepDefinition.CreateComputerSteps;
import cucumber.api.DataTable;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import StepDefinition.BaseTest;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;
import java.util.Map;

import static java.lang.Thread.sleep;
import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertEquals;
/**
 * Created by Harish19 on 4/01/2019.
 */
public class DeleteComputerSteps extends UpdateComputerPage {
    public DeleteComputerSteps()
    {
        super(BaseTest.driver);
    }

    @Then("I verify delete message for (.*?) is displayed")
    public void iVerifyDeleteComputerMessageIsDisplayed(String computer_name) throws Throwable {
        assertTrue("Computer deleted success message should be displayed",HomePage.ALERT_TEXT.getText().equals("Done! Computer has been deleted"));

    }

}
