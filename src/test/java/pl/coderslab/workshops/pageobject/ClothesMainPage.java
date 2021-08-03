package pl.coderslab.workshops.pageobject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;
import java.util.List;

public class ClothesMainPage {
    @FindBy(xpath = "//*[@id='js-product-list']/div[1]/article[2]/div/div[1]/h2/a")
    private WebElement productName;
    private WebDriver driver;
    private String productPrice;
    private String productDiscount;
    private String productNameChoosen;

    public ClothesMainPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    public void setProductNameChoosen(String productNameChoosen) {
        this.productNameChoosen = productNameChoosen;
    }

    public String getProductPrice() {
        return productPrice;
    }

    public String getProductDiscount() {
        return productDiscount;
    }

    public String getProductNameChoosen() {
        return productNameChoosen;
    }

    public String chooseProduct(String productName) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,350)", "");
        List<WebElement> productTitleList = driver.findElements(By.xpath("//*[@class='h3 product-title']/a"));
        ArrayList<String> newList = new ArrayList<String>();
        ArrayList<String> allProductList = new ArrayList<String>();

        List<WebElement> priceList = driver.findElements(By.xpath("//*[@class='price']"));
        List<WebElement> discountList = driver.findElements(By.xpath("//*[@class='discount-percentage discount-product']"));

        for(int i = 0; i < productTitleList.size(); i++) {
            String singleProductName = productTitleList.get(i).getText();
            allProductList.add(singleProductName);
                if(singleProductName.equals(productName)) {
                    newList.add(singleProductName);
                    productPrice = priceList.get(i).getText();
                    productDiscount = discountList.get(i).getText();
                    productTitleList.get(i).click();
                }
        }

        String resultProduct = newList.get(0);
        return resultProduct;
    }

}
