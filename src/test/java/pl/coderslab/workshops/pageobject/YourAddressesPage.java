package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class YourAddressesPage {
    @FindBy(xpath = "//*[@data-link-action=\"add-address\"]")
    private WebElement createNewAddressLink;

    public YourAddressesPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    public void clickCreateNewAddress() {
        createNewAddressLink.click();
    }
//
//    public String getLoggedInAlias() {
//    }
//
//    public String getLoggedInAddress() {
//    }
//
//    public String getLoggedInZip() {
//    }
//
//    public String getLoggedInCity() {
//    }
//
//    public String getLoggedInCountry() {
//    }
//
//    public String getLoggedInPhoneNumber() {
//    }
}
