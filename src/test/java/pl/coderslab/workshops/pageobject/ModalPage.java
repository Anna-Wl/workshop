package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ModalPage {
    @FindBy(xpath="//*[@id='blockcart-modal']/div/div/div[2]/div/div[2]/div/div/a")
    private WebElement proceedToCheckoutButton;

    public ModalPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    public void clickProceedToCheckOut() {
        proceedToCheckoutButton.click();
    }
}
