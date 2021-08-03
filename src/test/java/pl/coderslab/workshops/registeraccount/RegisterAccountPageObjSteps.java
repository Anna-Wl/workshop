package pl.coderslab.workshops.registeraccount;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pl.coderslab.workshops.Base;
import pl.coderslab.workshops.UserSignUpData;
import pl.coderslab.workshops.pageobject.*;

import java.io.IOException;
import java.util.Random;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;

public class RegisterAccountPageObjSteps extends Base {
    private WebDriver driver;
    private MyStoreHomePage homePage;
    private MyStoreLogInPage logInPage;
    private CreateAccountPage createAccountPage;
    private UserSignUpData userSignUpData;


    @Given("^Page (.*) opened in browser$")
    public void openPageInBrowser(String url) throws IOException {
        this.driver = initializeDriver();
        this.driver.get(url);
        // driver.manage().window().maximize();
        //Towrzenie obiektow
        this.homePage = new MyStoreHomePage(this.driver);
        this.logInPage = new MyStoreLogInPage(this.driver);
        this.createAccountPage = new CreateAccountPage(this.driver);
        this.userSignUpData = new UserSignUpData();
    }

    @When("^Click 'Sign in' link$")
    public void clickSignInLink() { homePage.clickSignIn();
    }

    @And("^Click 'No account Create one here' link$")
    public void clickCreateAccountLink() {
        logInPage.clickRegistrationLink();
    }

    @And("^Choose title '(.*)'$")
    public void chooseTitle(String title) {
       // createAccountPage.chooseTitle(title);
        userSignUpData.setAlias(title);

    }

    @And("^Enter name '(.*)'$")
    public void enterName(String name) {
      //  createAccountPage.enterFirstName(name);
        userSignUpData.setName(name);
    }

    @And("^Enter surname '(.*)'$")
    public void enterSurname(String surname) {
        userSignUpData.setSurname(surname);
    }

    @And("^Enter email$")
    public void enterEmail() {
        Random rand = new Random(System.currentTimeMillis());
        String randomEmail = UUID.randomUUID().toString()+"@testing1.pl";
        userSignUpData.setEmail(randomEmail);
    }

    @And("^Enter password '(.*)'$")
    public void enterPassword(String password) {
        userSignUpData.setPassword(password);
    }

    @And("^Enter birthday '(.*)'$")
    public void enterBirthday(String date) {
        userSignUpData.setBirthday(date);
    }

    @And("^Set Receive Offers (.*)$")
    public void setReceiveOffers(boolean isTrue) {
        userSignUpData.setReceiveOffers(isTrue);
    }

    @And("^Set Newsletter (.*)$")
    public void setNewsletter(boolean isTrue) {
        userSignUpData.setNewsletter(isTrue );
    }

    @And("^Fill the form$")
    public void fillTheForm() {
        createAccountPage.fillFormWithData(this.userSignUpData);
    }

    @And("^Click 'Save' button$")
    public void saveForm() {
        createAccountPage.saveUser();
    }

    @Then("^User name displayed in a browser$")
    public void userNameDisplayed() {
        assertEquals(userSignUpData.getName() + " " + userSignUpData.getSurname(), homePage.getSignedInUserName());
    }
}
