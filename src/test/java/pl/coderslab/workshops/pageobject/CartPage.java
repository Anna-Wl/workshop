package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CartPage {
    @FindBy(xpath = "//*[@id='main']/div/div[2]/div[1]/div[2]/div/a")
    private WebElement proceedToCheckoutOnCartPage;

    public CartPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    public void clickProceedToCheckOutOnCartPage() {
        proceedToCheckoutOnCartPage.click();
    }
}
