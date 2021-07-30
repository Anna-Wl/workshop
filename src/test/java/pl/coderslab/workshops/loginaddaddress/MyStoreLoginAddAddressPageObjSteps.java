package pl.coderslab.workshops.loginaddaddress;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pl.coderslab.workshops.NewAddressData;
import pl.coderslab.workshops.UserBasicData;
import pl.coderslab.workshops.pageobject.*;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertTrue;

public class MyStoreLoginAddAddressPageObjSteps {
    private WebDriver driver;
    private MyStoreHomePage homePage;
    private MyStoreLogInPage logInPage;
    private YourAccountPage accountPage;
    private YourAddressesPage addressesPage;
    private NewAddressPage newAddressPage;
    private NewAddressData newAddressData;
    private UserBasicData userBasicData;

    @Given("^Page (.*) opened in browser$")
    public void openPageInBrowser(String url) {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
        this.driver = new ChromeDriver();
        this.driver.manage().timeouts().implicitlyWait(8, TimeUnit.SECONDS);
        this.driver.get(url);
       // driver.manage().window().maximize();
        this.homePage = new MyStoreHomePage(this.driver);
        this.logInPage = new MyStoreLogInPage(this.driver);
        this.accountPage = new YourAccountPage(this.driver);
        this.addressesPage = new YourAddressesPage(this.driver);
        this.newAddressPage = new NewAddressPage(this.driver);
        this.newAddressData = new NewAddressData();
        this.userBasicData = new UserBasicData();
    }

    @When("^Click 'Sign in' link$")
    public void clickSignInLink() {
            homePage.clickSignIn();
    }

    @And("^Enter email '(.*)'$")
    public void enterEmail(String email) {
        logInPage.enterEmail(email);
    }

    @And("^Enter password '(.*)'$")
    public void enterPassword(String password) {
        logInPage.enterPassword(password);
    }

    @And("^Click 'Sing in' button$")
    public void clickSignInButton() {
        logInPage.clickSignIn();
    }

    @And("^Click 'Addresses' link$")
    public void clickAddressesLink() {
        accountPage.clickAddresses();
    }

    @And("^Click 'Create new address' link$")
    public void clickCreateNewAddressLink() {
        addressesPage.clickCreateNewAddress();
    }

    @And("^Enter alias '(.*)'$")
    public void enterAlias(String alias) {
        newAddressData.setAlias(alias);
    }

    @And("^Enter address '(.*)'$")
    public void enterAddress(String address) {
        newAddressData.setAddress(address);
    }

    @And("^Enter zip/postal code '(.*)'$")
    public void enterPostalCode(String zip) {
        newAddressData.setZip(zip);
    }

    @And("^Enter city '(.*)'$")
    public void enterCity(String city) {
        newAddressData.setCity(city);
    }

    @And("^Choose country '(.*)'$")
    public void chooseCountry(String country) {
        newAddressData.setCountry(country);
    }

    @And("^Enter phone number '(.*)'$")
    public void enterPhoneNumber(String phoneNumber) {
        newAddressData.setPhoneNumber(phoneNumber);
        System.out.println(newAddressData.getPhoneNumber());
    }

    @And("^Fill the form$")
    public void fillTheForm() {
        newAddressPage.saveFirstNameAndLastName(this.userBasicData);
        System.out.println(userBasicData.getName() + userBasicData.getSurname());
        newAddressPage.fillFormWithData(this.newAddressData);
    }

    @And("^Click 'Save' button$")
    public void clickSaveButton() {
        newAddressPage.clickSaveAddressButton();
    }

    @Then("^Data are displayed in a browser$")
        public void dataDisplayedInBrowser() {
        System.out.println(addressesPage.getLoggedInResults());
        System.out.println(addressesPage.getLoggedInAliasResult());
        assertTrue(addressesPage.getLoggedInAliasResult().contains(newAddressData.getAlias()));
        assertTrue(addressesPage.getLoggedInResults().contains(userBasicData.getName()));
        assertTrue(addressesPage.getLoggedInResults().contains(userBasicData.getSurname()));
        assertTrue(addressesPage.getLoggedInResults().contains(newAddressData.getAddress()));
        assertTrue(addressesPage.getLoggedInResults().contains(newAddressData.getZip()));
        assertTrue(addressesPage.getLoggedInResults().contains(newAddressData.getCity()));
        assertTrue(addressesPage.getLoggedInResults().contains(newAddressData.getCountry()));
        assertTrue(addressesPage.getLoggedInResults().contains(newAddressData.getPhoneNumber()));
        }

}

