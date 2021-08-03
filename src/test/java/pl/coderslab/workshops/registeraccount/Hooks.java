package pl.coderslab.workshops.registeraccount;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import pl.coderslab.workshops.Base;

import java.io.IOException;

public class Hooks extends Base {
    private WebDriver driver;


//    @Before
//    public void beforeScenario(){
//        System.out.println("This will run before the Scenario");
//    }


    @After
    public void AfterScenario() throws IOException {
        this.driver = initializeDriver();
        System.out.println("This will run after the Scenario");
        driver.close();
        driver.quit();
    }


}


