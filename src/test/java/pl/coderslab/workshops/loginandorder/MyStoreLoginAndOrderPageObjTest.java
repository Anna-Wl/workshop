package pl.coderslab.workshops.loginandorder;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/cucumber.features/login-and-order.feature",
        plugin = {"pretty","html:out"})

public class MyStoreLoginAndOrderPageObjTest {
}
