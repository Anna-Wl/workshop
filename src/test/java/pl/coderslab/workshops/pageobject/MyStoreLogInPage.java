package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyStoreLogInPage {
    @FindBy(xpath = "//*[@id=\"_desktop_user_info\"]/div/a")
    private WebElement signInLink;
    @FindBy(xpath = "//*[@id=\"login-form\"]/section/div[1]/div[1]/input")
    private WebElement emailToLogin;
    @FindBy(xpath = "//*[@id=\"login-form\"]/section/div[2]/div[1]/div/input")
    private WebElement passwordToLogin;
    @FindBy(id="submit-login")
    private WebElement signInButton;

    public MyStoreLogInPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

//    public void enterEmailAndPassword(String email, String password) {
//        emailToLogin.clear();
//        emailToLogin.sendKeys(email);
//        passwordToLogin.clear();
//        passwordToLogin.sendKeys(password);
//    }

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
}
