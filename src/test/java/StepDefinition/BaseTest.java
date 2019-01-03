package StepDefinition;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseTest{
    public static WebDriver driver;
    public static WebDriverWait wait;



    @Before
    public void beforeScenario(){

        String browser = System.getProperty("BROWSER");
        String OS=System.getProperty("os.name").toLowerCase();
        if(browser.equals("chrome") || browser.equals("")) {
            if(OS.contains("windows")) {
                System.setProperty("webdriver.chrome.driver", "src/resources/chromedriver.exe");
            }
            if(OS.contains("mac")){
                System.setProperty("webdriver.chrome.driver", "src/resources/chromedriver");
            }
            driver = new ChromeDriver();
            System.out.println("Initialising Driver");
        }
        if(browser.equals("firefox"))
        {
            if(OS.contains("windows")) {
                System.setProperty("webdriver.gecko.driver", "src/resources/geckodriver.exe");
            }

            if(OS.contains("mac")) {
                System.setProperty("webdriver.gecko.driver", "src/resources/geckodriver");
            }

            driver = new FirefoxDriver();

        }
        driver.manage().window().maximize();
        wait = new WebDriverWait(driver, 10, 100);
        // driver.get(System.getProperty("base.url"));

    }

    @After
    public void afterScenario(Scenario scenario){
        System.out.println("This will run after the Scenario");
        if (scenario.isFailed()) {
            scenario.embed(((TakesScreenshot) this.driver).getScreenshotAs(OutputType.BYTES), "image/png");
        }
        //BaseTest.driver.close();
        this.driver.quit();
    }
}