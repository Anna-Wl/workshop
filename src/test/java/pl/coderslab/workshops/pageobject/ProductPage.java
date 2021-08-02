package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class ProductPage {
    @FindBy(id="group_1")
    private WebElement sizeDropdown;
    @FindBy(xpath = "//*[@class='btn btn-touchspin js-touchspin bootstrap-touchspin-up']")
    private WebElement qtyUpButton;
    @FindBy(xpath = "//*[@id='add-to-cart-or-refresh']/div[2]/div/div[2]/button")
    private WebElement addToCartButton;
    private String sizeChoosen;
    private int qtyChoosen;

    public String getSizeChoosen() {
        return sizeChoosen;
    }

    public void setSizeChoosen(String sizeChoosen) {
        this.sizeChoosen = sizeChoosen;
    }

    public void setQtyChoosen(int qtyChoosen) {
        this.qtyChoosen = qtyChoosen;
    }

    public int getQtyChoosen() {
        return qtyChoosen;
    }

    public ProductPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    public void chooseProductSize(String size) {
        Select sizeDropdownSelect = new Select(sizeDropdown);
        sizeDropdownSelect.selectByVisibleText(size);
    }
    public boolean isSizeAvailable() {
        if(addToCartButton.isEnabled()) {
            return true;
        } else {
            return false;
        }
    }

    public void chooseItemsNumber(int numOfItems) {
        for(int i = 0; i < numOfItems-1; i++) {
            qtyUpButton.click();
        }
    }

    public void addProductToCart() {
        addToCartButton.click();
    }

}
