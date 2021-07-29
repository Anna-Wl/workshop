package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import pl.coderslab.workshops.NewAddressData;


public class NewAddressPage {
    @FindBy(xpath = "//*[@id=\"content\"]/div/div/form/section/div[1]/div[1]/input")
    private WebElement aliasInput;
    @FindBy(xpath = "//*[@id=\"content\"]/div/div/form/section/div[6]/div[1]/input")
    private WebElement addressInput;
    @FindBy(xpath = "//*[@id=\"content\"]/div/div/form/section/div[8]/div[1]/input")
    private WebElement zipInput;
    @FindBy(xpath = "//*[@id=\"content\"]/div/div/form/section/div[9]/div[1]/input")
    private WebElement cityInput;
    @FindBy(xpath = "//*[@id=\"content\"]/div/div/form/section/div[10]/div[1]/select")
    private WebElement countrySelect;
    @FindBy(xpath = "//*[@id=\"content\"]/div/div/form/section/div[11]/div[1]/input")
    private WebElement phoneNumberInput;
    @FindBy(xpath = "//*[@id=\"content\"]/div/div/form/footer/button")
    private WebElement saveNewAddressButton;


    public NewAddressPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    public void fillFormWithData(NewAddressData data) {
        setInput(aliasInput, data.getAlias());
        setInput(addressInput, data.getAddress());
        setInput(cityInput, data.getCity());
        setInput(zipInput, data.getZip());
        Select countrySelectData = new Select(countrySelect);
        countrySelectData.selectByVisibleText(data.getCountry());
        setInput(phoneNumberInput, data.getPhoneNumber());
    }

    private void setInput(WebElement input, String value) {
        input.clear();
        input.sendKeys(value);
    }

    public void clickSaveAddressButton() {
        saveNewAddressButton.click();
    }
}

