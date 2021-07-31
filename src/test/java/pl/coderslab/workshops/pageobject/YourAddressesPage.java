package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class YourAddressesPage {
    @FindBy(xpath = "//*[@data-link-action='add-address']")
    private WebElement createNewAddressLink;
    @FindBy(tagName = "address")
    private WebElement results;
    @FindBy(xpath = "//*[@class='address-body']/h4")
    private WebElement aliasResult;
    @FindBy(xpath = "//*[@data-link-action=\"delete-address\"]")
    private WebElement deleteLink;
    @FindBy(xpath = "//*[@data-alert=\"success\"]/ul/li")
    private WebElement alertMessageDeleted;

    public YourAddressesPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    public void clickCreateNewAddress() {
        createNewAddressLink.click();
    }

    public String getLoggedInResults() {
       return results.getText();
    }

    public String getLoggedInAliasResult() {
        return aliasResult.getText();
    }

    public void clickDeleteUserLink() {
        deleteLink.click();
    }

    public String getSuccessMessageText() {
        return alertMessageDeleted.getText();
    }
}
