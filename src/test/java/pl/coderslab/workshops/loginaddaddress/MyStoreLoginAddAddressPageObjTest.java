package pl.coderslab.workshops.loginaddaddress;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/cucumber.features/login-add-address.feature",
        plugin = {"pretty","html:out"})

public class MyStoreLoginAddAddressPageObjTest {
}
