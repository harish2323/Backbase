package Pages;


import StepDefinition.BaseTest;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

import static junit.framework.TestCase.assertTrue;

public class HomePage{
  WebDriver driver;
 public HomePage(WebDriver driver)
 {
    // super();
     PageFactory.initElements(driver, this);
     this.driver= driver;

 }


    @FindBy(how=How.ID,using="add")
    public static WebElement ADD_COMPUTER_BUTTON;

    @FindBy(how=How.CLASS_NAME,using="alert-message")
    public static WebElement ALERT_TEXT;

    @FindBy(how=How.XPATH,using="//h1[contains(text(),'computers found')]")
    public static WebElement COMPUTER_COUNT_TEXT;

    @FindBy(how=How.XPATH,using="//em[text()='Nothing to display']")
    public static WebElement NO_RESULT_TEXT;



    @FindBy(how=How.ID,using="searchbox")
    public static WebElement FILTER_TEXT_FIELD;

    @FindBy(how=How.ID,using="searchsubmit")
    public static WebElement FILTER_BUTTON;

    @FindBy(how=How.TAG_NAME,using="table")
    public static WebElement RESULT_TABLE;

    @FindBy(how=How.TAG_NAME,using="tbody")
    public static WebElement RESULT_TABLE_BODY;

    @FindBy(how=How.TAG_NAME,using="thead")
    public static WebElement RESULT_TABLE_HEADER;

    @FindBy(how=How.LINK_TEXT,using="Computer name")
    public static WebElement COMPUTER_NAME_HEADER;

    @FindBy(how=How.CLASS_NAME,using="next")
    public static WebElement NEXT_BUTTON;

    @FindBy(how=How.CLASS_NAME,using="current")
    public static WebElement CURRENT_PAGE_NUMBER;
    @FindBy(how=How.CLASS_NAME,using="prev")
    public static WebElement PREVIOUS_BUTTON;

    @FindBy(how=How.XPATH,using="//*[contains(@class,'prev disabled')]")
    public static WebElement PREVIOUS_BUTTON_DISABLED;

    @FindBy(how=How.XPATH,using="//*[contains(@class,'next disabled')]")
    public static WebElement NEXT_BUTTON_DISABLED;

    public static void loadhomepage()
    {
       // driver.get(System.getProperty("base.url"));

    }

   public static void gotolastpage()
   {
       while(!NEXT_BUTTON_DISABLED.isDisplayed())
           NEXT_BUTTON.click();
   }

   public static int computercount()
   {
       return (Integer.parseInt(COMPUTER_COUNT_TEXT.getText().replaceAll("\\D+","")));
   }

   public static int resultcount()
   {
       List<WebElement> result = HomePage.RESULT_TABLE_BODY.findElements(By.tagName("tr"));
       int resultcount=result.size();
       System.out.println("NEXT BUTTON DISABLED :"+NEXT_BUTTON_DISABLED.isDisplayed());

       while(!NEXT_BUTTON_DISABLED.isDisplayed())
       {
           result= HomePage.RESULT_TABLE_BODY.findElements(By.tagName("tr"));
           NEXT_BUTTON.click();
           resultcount=resultcount+result.size();

       }

       return resultcount;
   }







}
