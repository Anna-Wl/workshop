package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyStoreHomePage {
    @FindBy(xpath = "//*[@id='_desktop_user_info']/div/a")
    private WebElement signInLink;

    public MyStoreHomePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    public void clickSignIn() {
        signInLink.click();
    }
}
