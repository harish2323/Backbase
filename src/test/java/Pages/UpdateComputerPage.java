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
public class UpdateComputerPage extends CreateComputerPage {
    WebDriver driver;

    public UpdateComputerPage(WebDriver driver)
    {
        super(driver);


    }


    @FindBy(how=How.XPATH,using="//*[@value='Save this computer']")
    public static WebElement SAVE_THIS_COMPUTER_BUTTON;

    @FindBy(how=How.XPATH,using="//*[@value='Delete this computer']")
    public static WebElement DELETE_THIS_COMPUTER_BUTTON;
}
