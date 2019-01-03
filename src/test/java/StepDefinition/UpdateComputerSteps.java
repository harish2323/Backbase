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
 * Created by Harish19 on 3/01/2019.
 */
public class UpdateComputerSteps  extends UpdateComputerPage {


    public UpdateComputerSteps()
    {
        super(BaseTest.driver);
    }
    @And("^I create the computer if it does not exist$")
    public void Icreatecomputer(DataTable computer_details) throws Throwable {
        //Write the code to handle Data Table
        List<Map<String,String>> data = computer_details.asMaps(String.class,String.class);
        HomePage.FILTER_TEXT_FIELD.sendKeys(data.get(0).get("Computer name"));
        HomePage.FILTER_BUTTON.click();
        try {
            HomePage.NO_RESULT_TEXT.isDisplayed();
            HomePage.ADD_COMPUTER_BUTTON.click();
            CreateComputerPage.COMPUTER_NAME.sendKeys(data.get(0).get("Computer name"));
            CreateComputerPage.INTRODUCED_DATE.sendKeys(data.get(0).get("Introduced date"));
            CreateComputerPage.DISCONTINUED_DATE.sendKeys(data.get(0).get("Discontinued date"));
            CreateComputerPage.COMPANY_NAME.sendKeys(data.get(0).get("Company name"));
            CreateComputerPage.CREATE_THIS_COMPUTER_BUTTON.click();
            assertTrue("Computer created success message should be displayed",HomePage.ALERT_TEXT.getText().equals("Done! Computer "+data.get(0).get("Computer name")+" has been created"));

        } catch (org.openqa.selenium.NoSuchElementException e) {

        }

    }



    @And("^I click on the (.*?) in the result$")
    public void iClickOnTheComputerNameInTheResult(String computer_name) throws Throwable {
        List<WebElement> result = HomePage.RESULT_TABLE_BODY.findElements(By.tagName("tr"));
        result.get(0).findElements(By.tagName("td")).get(0).findElements(By.tagName("a")).get(0).click();

    }

    @And("^I click the save this computer button$")
    public void iClickTheSaveThisComputerButton() throws Throwable {
        UpdateComputerPage.SAVE_THIS_COMPUTER_BUTTON.click();
    }

    @And("^I click the delete this computer button$")
    public void iClickTheDeleteThisComputerButton() throws Throwable {
        UpdateComputerPage.DELETE_THIS_COMPUTER_BUTTON.click();
    }

    @And("^I delete the computer if it exists$")
    public void iDeleteTheComputerIfItExists(DataTable computer_details) throws Throwable {
        List<Map<String,String>> data = computer_details.asMaps(String.class,String.class);
        HomePage.FILTER_TEXT_FIELD.clear();
        HomePage.FILTER_TEXT_FIELD.sendKeys(data.get(0).get("Computer name"));
        HomePage.FILTER_BUTTON.click();
        try {
            HomePage.NO_RESULT_TEXT.isDisplayed();
            HomePage.FILTER_TEXT_FIELD.clear();

        } catch (org.openqa.selenium.NoSuchElementException e) {
            List<WebElement> result = HomePage.RESULT_TABLE_BODY.findElements(By.tagName("tr"));
            result.get(0).findElements(By.tagName("td")).get(0).findElements(By.tagName("a")).get(0).click();
            UpdateComputerPage.DELETE_THIS_COMPUTER_BUTTON.click();
        }
    }
}
