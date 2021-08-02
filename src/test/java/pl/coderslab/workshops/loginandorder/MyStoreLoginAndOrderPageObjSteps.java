package pl.coderslab.workshops.loginandorder;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import pl.coderslab.workshops.NewAddressData;
import pl.coderslab.workshops.UserBasicData;
import pl.coderslab.workshops.pageobject.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.*;

public class MyStoreLoginAndOrderPageObjSteps {
    //Deklaracja pol
    private WebDriver driver;
    private MyStoreHomePage homePage;
    private MyStoreLogInPage logInPage;
    private YourAccountPage accountPage;
    private ClothesMainPage clothesMainPage;
    private ProductPage productPage;
    private ModalPage modalPage;
    private CartPage cartPage;
    private OrderPage orderPage;
    private YourOrderIsConfirmedPage yourOrderIsConfirmedPage;
    private OrderHistoryPage orderHistoryPage;

    @Given("^Page (.*) opened in browser$")
    public void openPageInBrowser(String url) {
        //Ustawienie parametrów sterownika przeglądarki
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
        //Uruchomienie przeglądarki Chrome
        this.driver = new ChromeDriver();
        // this.driver.manage().timeouts().implicitlyWait(8, TimeUnit.SECONDS);
        //Otworzenie strony
        this.driver.get(url);
        // driver.manage().window().maximize();
        //Towrzenie obiektow
        this.homePage = new MyStoreHomePage(this.driver);
        this.logInPage = new MyStoreLogInPage(this.driver);
        this.accountPage = new YourAccountPage(this.driver);
        this.clothesMainPage = new ClothesMainPage(this.driver);
        this.productPage = new ProductPage(this.driver);
        this.modalPage = new ModalPage(this.driver);
        this.cartPage = new CartPage(this.driver);
        this.orderPage = new OrderPage(this.driver);
        this.yourOrderIsConfirmedPage = new YourOrderIsConfirmedPage(this.driver);
        this.orderHistoryPage = new OrderHistoryPage(this.driver);
    }

    @When("^Click 'Sign in' link$")
    public void clickSignInLink() {
            homePage.clickSignIn();
    }

    @And("^Enter email '(.*)'$")
    public void enterEmail(String email) {
        logInPage.enterEmail(email);
    }

    @And("^Enter password '(.*)'$")
    public void enterPassword(String password) {
        logInPage.enterPassword(password);
    }

    @And("^Click 'Sing in' button$")
    public void clickSignInButton() {
        logInPage.clickSignIn();
    }

    @And("^Click 'Clothes' link$")
    public void clickClothesLink() {
        accountPage.clickClothes();
    }

    @And("^Click product '(.*)'$")
    public void chooseProduct(String productName) {
        String resultProduct = clothesMainPage.chooseProduct(productName);
        System.out.println(resultProduct);
        assertEquals(productName, resultProduct);
        clothesMainPage.setProductNameChoosen(productName);
    }

    @And("^Discount for product is '(.*)'$")
    public void isProductDiscontedWith20Percent(String discount) {
        System.out.println(clothesMainPage.getProductDiscount());
        assertEquals(discount, clothesMainPage.getProductDiscount());
    }

    @And("^Price of product is '(.*)'$")
    public void isProductPrice(String productPrice) {
        System.out.println(clothesMainPage.getProductPrice());
        assertEquals(productPrice, clothesMainPage.getProductPrice());
    }

    @And("^Choose size '(.*)'$")
    public void chooseSize(String size) throws InterruptedException {
        productPage.chooseProductSize(size);
        Thread.sleep(2000);
        productPage.setSizeChoosen(size);

        System.out.println(productPage.isSizeAvailable());
        if(!productPage.isSizeAvailable()) {
            productPage.chooseProductSize("M");
            assertFalse(size + " size is not available", productPage.isSizeAvailable());
        } else {
            assertTrue(size + " size is available", productPage.isSizeAvailable());
        }

    }

    @And("^Choose '(.*)' items$")
    public void chooseNumOfItems(int numOfItems) throws InterruptedException {
        Thread.sleep(2000);
        productPage.chooseItemsNumber(numOfItems);
        productPage.setQtyChoosen(numOfItems);
    }

    @And("^Add product to basket$")
    public void addProductToBasket() throws InterruptedException {
        productPage.addProductToCart();
        Thread.sleep(2000);
    }

    @And("^Click 'Proceed to checkout' on Modal Page$")
    public void clickProceedToCheckout() {
        modalPage.clickProceedToCheckOut();
    }

    @And("^Click 'Proceed to checkout' on Cart Page$")
    public void clickProceedToCheckoutonCartPage()  {
        cartPage.clickProceedToCheckOutOnCartPage();
    }

    @And("^Click 'Continue' button to confirm address$")
    public void clickContinueToConfirmAddress()  {
        orderPage.clickContinueToConfirmAddress();
    }

    @And("^Choose shipping method '(.*)'$")
    public void chooseShippingMethod(String shippingMethod) {
        orderPage.chooseShippingMethod(shippingMethod);
    }

    @And("^Click 'Continue' button to confirm shipping method$")
    public void clickContinueButtonToConfirmShippingMethod() {
        orderPage.clickContinueToConfirmShipping();
    }

    @And("^Choose payment method '(.*)'$")
    public void choosePaymentMethod(String paymentMethod) {
        orderPage.choosePaymentMethod(paymentMethod);
    }

    @And("^Click 'agree to the terms of service'$")
    public void clickAgreeToTheTermsOfService() {
        orderPage.clickTermsOfServiceAgreement();
    }

    @And("^Click 'Order with and obligation to pay button'$")
    public void clickorderWithAnObligationToPayButton() {
        orderPage.clickorderWithAnObligationToPay();
    }

    @And("^Take screenshot of order confirmation and price$")
    public void takeScreenshotOfOrderConfirmationAndPrice() throws IOException {
        yourOrderIsConfirmedPage.takeScreenshoot();
        yourOrderIsConfirmedPage.saveOrderReference();
        yourOrderIsConfirmedPage.savePriceReference();
        assertTrue(yourOrderIsConfirmedPage.getShippingMethodDisplayed().contains(orderPage.getShippingMethodChoosen()));
        if(orderPage.getShippingMethodChoosen().equals("PrestaShop")) {
            assertTrue(yourOrderIsConfirmedPage.getShippingMethodDisplayed().contains("PrestaShop"));
        } else {
            System.out.println("My carrier has been choosen");
        }
        System.out.println(yourOrderIsConfirmedPage.getProductNameDisplayed());
        assertTrue(yourOrderIsConfirmedPage.getProductNameDisplayed().toLowerCase().contains(clothesMainPage.getProductNameChoosen().toLowerCase()));
        assertTrue(yourOrderIsConfirmedPage.getProductNameDisplayed().contains(productPage.getSizeChoosen()));
        assertTrue(yourOrderIsConfirmedPage.getQtyDisplayed().contains(String.valueOf(productPage.getQtyChoosen())));
        System.out.println(yourOrderIsConfirmedPage.getQtyDisplayed());
        System.out.println(productPage.getQtyChoosen());
    }

    @And("^Click user name$")
    public void clickUsernName() {
        homePage.clickUserNameLink();
    }

    @And("^Click 'Order history and details'$")
    public void clickOrderHistoryAndDetails() throws InterruptedException {
        accountPage.clickOrderHistory();
        Thread.sleep(2000);
    }

    @Then("^Order with status 'Awaiting check payment' and correct total$")
    public void orderStatusAwaitingCheckPaymentAndCorrectTotals() throws InterruptedException {
        orderHistoryPage.isOrderStatusAwaitingCheckPayment(yourOrderIsConfirmedPage.getOrderReferenceNumber());
        System.out.println(yourOrderIsConfirmedPage.getOrderReferenceNumber());
        System.out.println(yourOrderIsConfirmedPage.getTotalPriceReferenceNumber());
        System.out.println(orderHistoryPage.getOrderResult());
        System.out.println(orderHistoryPage.getPriceResult());
        System.out.println(orderPage.getPaymentMethodChoosen());
        if(orderPage.getPaymentMethodChoosen().equals("Pay By Check")) {
            assertEquals("Awaiting check payment", orderHistoryPage.getOrderResult());
        } else {
            assertEquals("Awaiting bank wire payment", orderHistoryPage.getOrderResult());
        }
        assertEquals(yourOrderIsConfirmedPage.getTotalPriceReferenceNumber(), orderHistoryPage.getPriceResult());

    }
}

