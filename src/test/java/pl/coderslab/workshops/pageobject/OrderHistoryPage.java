package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;
import java.util.List;

public class OrderHistoryPage {
    private WebDriver driver;
    private String orderResult;
    private String priceResult;

    public String getOrderResult() {
        return orderResult;
    }

    public String getPriceResult() {
        return priceResult;
    }

    public OrderHistoryPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    public void isOrderStatusAwaitingCheckPayment(String referenceNumber)  {
        List<WebElement> orderReferenceList = driver.findElements(By.xpath("//*[@scope='row']"));
        List<WebElement> orderStatusList = driver.findElements(By.xpath("//*[@id='content']/table/tbody/tr/td/span"));
        List<WebElement> priceList = driver.findElements(By.xpath("//*[@id='content']/table/tbody/tr/td[2]"));

        for (int i = 0; i < orderReferenceList.size(); i++) {
            String singleOrderReferenceText = orderReferenceList.get(i).getText();
            if (singleOrderReferenceText.equals(referenceNumber)) {
                orderResult = orderStatusList.get(i).getText();
                priceResult = priceList.get(i).getText();
            }
        }
    }

}


