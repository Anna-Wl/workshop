package pl.coderslab.workshops.registeraccount;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/cucumber.features/register-account.feature",
        plugin = {"pretty","html:out"})

public class RegisterAccountPageObjTest {
}