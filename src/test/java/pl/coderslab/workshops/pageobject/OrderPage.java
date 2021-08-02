package pl.coderslab.workshops.pageobject;

import cucumber.api.java.en.Given;
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

public class OrderPage {

    @FindBy(xpath="//*[@name=\"confirm-addresses\"]")
    private WebElement addressContinueButton;
    @FindBy(xpath = "//*[@name=\"confirmDeliveryOption\"]")
    private WebElement shippingMethodContinueButton;
    @FindBy(xpath = "//*[@id=\"delivery_option_1\"]")
    private WebElement shippingMethodDeliveryOptionPrestaShop;
    @FindBy(xpath = "//*[@id=\"delivery_option_2\"]")
    private WebElement shippingMethodDeliveryOptionMyCarrier;
    @FindBy(id = "payment-option-1")
    private WebElement paymentMethodPayByCheck;
    @FindBy(id = "payment-option-2")
    private WebElement paymentMethodPayByBankWire;
    @FindBy (id="conditions_to_approve[terms-and-conditions]")
    private WebElement agreeToTermsOfServiceCheckbox;
    @FindBy(id="payment-confirmation")
    private WebElement orderWithAnObligationToPayButton;
    private String paymentMethodChoosen;
    private String shippingMethodChoosen;

    public OrderPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    public String getPaymentMethodChoosen() {
        return paymentMethodChoosen;
    }

    public String getShippingMethodChoosen() {
        return shippingMethodChoosen;
    }

    public void clickContinueToConfirmAddress() {
        addressContinueButton.click();
    }

    public void chooseShippingMethod(String shippingMethod) {
        shippingMethodChoosen = shippingMethod;
        if(shippingMethod.equals("PrestaShop")) {
            if(!shippingMethodDeliveryOptionPrestaShop.isSelected()) {
                shippingMethodDeliveryOptionPrestaShop.click();
            }

        } else {
            if(!shippingMethodDeliveryOptionMyCarrier.isSelected()) {
                shippingMethodDeliveryOptionMyCarrier.click();
            }
        }
    }

    public void clickContinueToConfirmShipping() {
        shippingMethodContinueButton.click();
    }

    public void choosePaymentMethod(String paymentMethod) {
        paymentMethodChoosen = paymentMethod;
        if(paymentMethod.equals("Pay By Check")) {
            if(!paymentMethodPayByCheck.isSelected()) {
                paymentMethodPayByCheck.click();
            }
        } else {
            if(!paymentMethodPayByBankWire.isSelected()) {
                paymentMethodPayByBankWire.click();
            }
        }
    }

    public void clickTermsOfServiceAgreement() {
        agreeToTermsOfServiceCheckbox.click();
    }

    public void clickorderWithAnObligationToPay() {
        orderWithAnObligationToPayButton.click();
    }


}
