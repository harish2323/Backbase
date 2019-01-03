package Pages;

/**
 * Created by Harish19 on 3/01/2019.
 */

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.List;


import static junit.framework.TestCase.assertTrue;

public class CreateComputerPage
{
    WebDriver driver;
    public CreateComputerPage(WebDriver driver)
    {
        //super();
        PageFactory.initElements(driver, this);
        this.driver=driver;

    }


    @FindBy(how=How.ID,using="name")
    public static WebElement COMPUTER_NAME;

    @FindBy(how=How.ID,using="introduced")
    public static WebElement  INTRODUCED_DATE;

    @FindBy(how=How.ID,using="discontinued")
    public static WebElement DISCONTINUED_DATE;

    @FindBy(how=How.ID,using="company")
    public static WebElement COMPANY_NAME;

    @FindBy(how=How.XPATH,using="//*[@value='Create this computer']")
    public static WebElement CREATE_THIS_COMPUTER_BUTTON;

    @FindBy(how=How.XPATH,using="//a[text()='Cancel']")
    public static WebElement CANCEL_BUTTON;

    @FindBy(how=How.XPATH,using="//div[@class='clearfix error']/child::label")
    public static WebElement FIELD_ERROR_RED;


}
