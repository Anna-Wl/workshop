package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyStoreLogInPage {
    @FindBy(id = "submit-login")
    private WebElement signInLink;
    @FindBy(xpath = "//*[@name='email']")
    private WebElement emailToLogin;
    @FindBy(xpath = "//*[@name='password']")
    private WebElement passwordToLogin;
    @FindBy(id="submit-login")
    private WebElement signInButton;
    @FindBy(xpath = "//*[@id='content']/div/a")
    private WebElement createAccountLink;

    public MyStoreLogInPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    public void clickSignIn() {
        signInButton.click();
    }

    public void enterEmail(String email) {
        emailToLogin.clear();
        emailToLogin.sendKeys(email);
    }

    public void enterPassword(String password) {
        passwordToLogin.clear();
        passwordToLogin.sendKeys(password);
    }

    public void clickRegistrationLink() {
        createAccountLink.click();
    }
}
