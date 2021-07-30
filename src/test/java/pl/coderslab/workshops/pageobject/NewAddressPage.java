package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import pl.coderslab.workshops.NewAddressData;
import pl.coderslab.workshops.UserBasicData;


public class NewAddressPage {
    @FindBy(xpath = "//*[@name='alias']")
    private WebElement aliasInput;
    @FindBy(xpath = "//*[@name='address1']")
    private WebElement addressInput;
    @FindBy(xpath = "//*[@name='postcode']")
    private WebElement zipInput;
    @FindBy(xpath = "//*[@name='city']")
    private WebElement cityInput;
    @FindBy(xpath = "//*[@name='id_country']")
    private WebElement countrySelect;
    @FindBy(xpath = "//*[@name='phone']")
    private WebElement phoneNumberInput;
    @FindBy(xpath = "//*[@id='content']/div/div/form/footer/button")
    private WebElement saveNewAddressButton;
    @FindBy(xpath = "//*[@name='firstname']")
    private WebElement nameInput;
    @FindBy(xpath = "//*[@name='lastname']")
    private WebElement lastNameInput;


    public NewAddressPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    public void fillFormWithData(NewAddressData data) {
        setInput(aliasInput, data.getAlias());
        setInput(addressInput, data.getAddress());
        setInput(cityInput, data.getCity());
        setInput(zipInput, data.getZip());
        setInput(phoneNumberInput, data.getPhoneNumber());
        Select countrySelectData = new Select(countrySelect);
        countrySelectData.selectByVisibleText(data.getCountry());

    }

    private void setInput(WebElement input, String value) {
        input.clear();
        input.sendKeys(value);
    }

    public void clickSaveAddressButton() {
        saveNewAddressButton.click();
    }

    public void saveFirstNameAndLastName(UserBasicData data) {
        String nameOfUser = nameInput.getAttribute("value");
        String surnameOfUser = lastNameInput.getAttribute("value");
        data.setName(nameOfUser);
        data.setSurname(surnameOfUser);
    }
}

