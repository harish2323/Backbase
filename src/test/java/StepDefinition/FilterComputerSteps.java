package StepDefinition;

import Pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.apache.http.client.utils.DateUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import StepDefinition.BaseTest;
import java.util.List;
import java.text.SimpleDateFormat;
import java.util.Date;

import static java.lang.Thread.sleep;
import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertEquals;

//import static com.sun.tools.doclint.Entity.amp;


/**
 * Created by Harish19 on 28/07/2018.
 */
public class FilterComputerSteps extends HomePage {

    private HomePage homepage;

    public FilterComputerSteps() {
        super(BaseTest.driver);


    }

    @Before("@FilterComputer")
    public void startup() {
    }


    @Given("^I load the home page$")
    public void I_load_the_home_page() throws Throwable {
        // navigate to the url based on the environment specified from command line
        HomePage.loadhomepage();
    }

    @And("^I enter the (.*?) in the filter text box$")
    public void iEnterTheComputerNameInTheFilterTextBox(String computer_name) throws Throwable {
        HomePage.FILTER_TEXT_FIELD.clear();
        HomePage.FILTER_TEXT_FIELD.sendKeys(computer_name);
    }

    @And("^I click the filter button$")
    public void iClickTheFilterButton() throws Throwable {
        HomePage.FILTER_BUTTON.click();

    }

    @Then("^I verify the result contains the (.*?)$")
    public void iVerifyTheResultContainsTheComputerName(String computer_name) throws Throwable {
        List<WebElement> result = HomePage.RESULT_TABLE_BODY.findElements(By.tagName("tr"));
        for (int i = 0; i < result.size(); i++) {
            System.out.println("Computer name :" + result.get(i).findElements(By.tagName("td")).get(0).getText());

            assertTrue(result.get(i).findElements(By.tagName("td")).get(0).getText().toLowerCase().contains(computer_name.toLowerCase()));
        }

    }

    @Then("^I verify the result contains (.*?),(.*?),(.*?),(.*?)$")
    public void iVerifyTheResultContains(String computer_name, String introduced_date, String discontinued_date, String company_name) throws Throwable {
        List<WebElement> result = HomePage.RESULT_TABLE_BODY.findElements(By.tagName("tr"));
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
        System.out.println("Computer name :" + result.get(0).findElements(By.tagName("td")).get(0).getText());

        assertTrue(result.get(0).findElements(By.tagName("td")).get(0).getText().toLowerCase().equals(computer_name.toLowerCase()));

        if (introduced_date.equals("")) {
            assertTrue(result.get(0).findElements(By.tagName("td")).get(1).getText().equals("-"));
        } else {
            Date introduced = new SimpleDateFormat("yyyy-MM-dd").parse(introduced_date);
            assertTrue(result.get(0).findElements(By.tagName("td")).get(1).getText().equals(formatter.format(introduced).replace("-", " ")));
        }

        if (discontinued_date.equals("")) {
            assertTrue(result.get(0).findElements(By.tagName("td")).get(2).getText().equals("-"));
        } else {
            Date discontinued = new SimpleDateFormat("yyyy-MM-dd").parse(discontinued_date);
            assertTrue(result.get(0).findElements(By.tagName("td")).get(2).getText().equals(formatter.format(discontinued).replace("-", " ")));
        }
        if (company_name.equals("")) {
            assertTrue(result.get(0).findElements(By.tagName("td")).get(3).getText().equals("-"));
        } else {
            assertTrue(result.get(0).findElements(By.tagName("td")).get(3).getText().toLowerCase().equals(company_name.toLowerCase()));
        }


    }

    @Then("^I verify the computer count matches the total number of results$")
    public void iVerifyTheComputerCountMatchesTheTotalNumberOfResults() throws Throwable {
        int computer_count = HomePage.computercount();
        int results_count = HomePage.resultcount();
        System.out.println("RESULT COUNT : " + results_count + "  COMPUTER : " + computer_count);
        assertTrue("Result count does not match the computer count", computer_count == results_count);
    }

    @Then("^I verify no results are displayed$")
    public void iVerifyNoResultsAreDisplayed() throws Throwable {
        assertTrue("Nothing to display is shown", HomePage.NO_RESULT_TEXT.isDisplayed());
        assertTrue("No computers found is displayed", HomePage.COMPUTER_COUNT_TEXT.getText().equals("No computers found"));
    }

}
