package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class YourAccountPage {
    private WebDriver driver;
    @FindBy(xpath = "//*[@title='Addresses']")
    private WebElement addressesLink;
    @FindBy(xpath = "//*[@id=\"category-3\"]/a")
    private WebElement clothesLink;
    @FindBy(id="history-link")
    private WebElement orderHistoryAndDetailsLink;

    public YourAccountPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void clickAddresses() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,350)", "");
        addressesLink.click();
    }

    public void clickClothes() {
        clothesLink.click();
    }

    public void clickOrderHistory() {
        orderHistoryAndDetailsLink.click();
    }
}
