package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;

public class YourOrderIsConfirmedPage {
    private WebDriver driver;
    @FindBy(xpath = "//*[@id=\"order-details\"]/ul/li[1]")
    private WebElement orderReference;
    private String orderReferenceNumber;
    private String totalPriceReferenceNumber;
    @FindBy(xpath = "//*[@id=\"order-items\"]/div/table/tbody/tr[3]/td[2]")
    private WebElement totalPriceReference;
    @FindBy(xpath = "//*[@id=\"order-details\"]/ul/li[3]")
    private WebElement shippingMethodDisplayed;
    String[] splitShippingMethodDisplayedText;
    @FindBy(xpath = "//*[@id=\"order-items\"]/div/div/div[2]/span")
    private WebElement productnameDisplayed;

    public YourOrderIsConfirmedPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    public String getOrderReferenceNumber() {
        return orderReferenceNumber;
    }

    public String getTotalPriceReferenceNumber() {
        return totalPriceReferenceNumber;
    }

    public String[] getSplitShippingMethodDisplayedText() {
        return splitShippingMethodDisplayedText;
    }

    public void setSplitShippingMethodDisplayedText(String[] splitShippingMethodDisplayedText) {
        this.splitShippingMethodDisplayedText = splitShippingMethodDisplayedText;
    }

    public void takeScreenshoot() throws IOException {
        TakesScreenshot screenshot = (TakesScreenshot)driver;
//Take screenshot (will be saved in default location) and automatically removed after test
        File source = screenshot.getScreenshotAs(OutputType.FILE);
//Copy the screenshot to desired location
//Path to the location to save screenshot
//(directory for screenshots MUST exist: C:\test-evidence) e.g.:
        String currentDateTime = LocalDateTime.now().toString().replaceAll(":", "_");
        Files.copy(source.toPath(), Paths.get("C:", "test-evidence", "ddg-evidence-"+currentDateTime+".png"));
    }

    public void saveOrderReference() {
        String orderReferenceText = orderReference.getText();
        String[] splitOrderReferenceText = orderReferenceText.split(" ");
        int lastIndex = splitOrderReferenceText.length-1;
        orderReferenceNumber = splitOrderReferenceText[lastIndex];
    }

    public void savePriceReference() {
//        String totalPriceReferenceText = totalPriceReference.getText();
//        String[] splitTotalPriceReferenceText = totalPriceReferenceText.split("€");
//        int lastIndex = splitTotalPriceReferenceText.length-1;
//        totalPriceReferenceNumber = splitTotalPriceReferenceText[lastIndex];
        totalPriceReferenceNumber = totalPriceReference.getText();
    }


    public String getShippingMethodDisplayed() {
//        String shippingMethodDisplayedText = shippingMethodDisplayed.getText();
//        splitShippingMethodDisplayedText = shippingMethodDisplayedText.split(" ");
//        //int lastIndex = splitShippingMethodDisplayedText.length-1;
//        String shippingMethodChoosen = splitShippingMethodDisplayedText[2];
        String shippingMethodDisplayedText = shippingMethodDisplayed.getText();
        return shippingMethodDisplayedText;
    }

    public String getProductNameDisplayed() {
        String productNameDisplayedText = productnameDisplayed.getText();
        return productNameDisplayedText;
    }
}
