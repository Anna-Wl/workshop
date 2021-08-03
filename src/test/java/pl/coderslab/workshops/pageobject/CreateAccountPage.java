package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import pl.coderslab.workshops.UserSignUpData;

public class CreateAccountPage {
    private WebDriver driver;
    @FindBy(xpath = "//*[@id='customer-form']/section/div[1]/div[1]/label[1]/span/input")
    private WebElement titleMrRadio;
    @FindBy(xpath = "//*[@id='customer-form']/section/div[1]/div[1]/label[2]/span/input")
    private WebElement titleMrsRadio;
    @FindBy(xpath = "//*[@name='firstname']")
    private WebElement firstName;
    @FindBy(xpath = "//*[@name='lastname']")
    private WebElement lastName;
    @FindBy(xpath = "//*[@name='email']")
    private WebElement email;
    @FindBy(xpath = "//*[@name='password']")
    private WebElement password;
    @FindBy(xpath = "//*[@name='birthday']")
    private WebElement birthday;
    @FindBy(xpath = "//*[@name='optin']")
    private WebElement receiveOffersCheckbox;
    @FindBy(xpath = "//*[@name='newsletter']")
    private WebElement signUpForNewsletterCheckbox;
    @FindBy(xpath = "//*[@data-link-action='save-customer']")
    private WebElement saveNewUserButton;

    public CreateAccountPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void fillFormWithData(UserSignUpData data) {
        if (data.getAlias().equals("Mr") && !titleMrRadio.isSelected()) {
            titleMrRadio.click();
        } else if (data.getAlias().equals("Mrs") && !titleMrsRadio.isSelected()) {
            titleMrsRadio.click();
        } else {
            return;
        }
        setInput(firstName, data.getName());
        setInput(lastName, data.getSurname());
        setInput(email, data.getEmail());
        setInput(password, data.getPassword());
        setInput(birthday, data.getBirthday());
        setCheckbox(receiveOffersCheckbox, data.isReceiveOffers());
        setCheckbox(signUpForNewsletterCheckbox, data.isNewsletter());
    }

    private void setInput(WebElement input, String value) {
        input.clear();
        input.sendKeys(value);
    }

    private void setCheckbox(WebElement checkbox, boolean checked) {
        if(checkbox.isSelected() != checked) {
            checkbox.click();
        }
    }

    public void saveUser() {
        saveNewUserButton.click();
    }
}
