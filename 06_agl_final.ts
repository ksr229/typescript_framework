import { $, browser, by, element } from "protractor";

import { ExpectedConditions as EC } from "protractor";

describe("Smoke Test: Alfiebot Webchat - ", () => {
  const url = "https://agldstqtrtest.digital.agl.com.au/contact-us";
  const elements = {
    campaignBtn: $('img[src*="alfieavatar60x60.png"]'),
    jrnySelection: element(
      by.cssContainingText("select[role='listbox']>option", "Account Balance")
    ),
    submitBtn: $(".lp_submit_button"),
    selectLogin: element(by.xpath("//button[contains(text(),'Login')]")),
    loginNotification: $("[data-lp-point='widgetNotificationText']"),
    widgetBtn: $("[data-lp-point='widget_sdk']"),
    loginIframe1: $('iframe[id^="LPFRM"]'),
    loginIframe2: $("iframe#loginiframe2"),
    email: element(
      by.xpath(
        "//label[contains(text(), 'Email or Mobile')]/following-sibling::input"
      )
    ),
    nextBtn: element(by.xpath("//button[.=' Next ']")),
    password: $("[formcontrolname='password']"),
    loginBtn: element(by.xpath("//button[contains(text(),' Login')]")),
    elecBill: element(by.xpath("//p[contains(text(),'Elec')]")),

    gasBill: element(by.xpath("//p[contains(text(),'Gas')]"))
  };


  describe("Authenticated User Flow: ", () => {    
    beforeAll(() => {
      browser.ignoreSynchronization = true;
      browser
        .manage()
        .window()
        .maximize();
      browser.get(url)
    });

    describe("Click on Campaign Btn: ", () => {

      it("user should be able to click the Campaign Btn.", () => {
        browser.wait(EC.visibilityOf(elements.campaignBtn));
        // TODO add a check of clickability and try catch to retry to click the campaign button
        elements.campaignBtn.click();
        // browser.sleep(3000);
      });
    });

    describe("Select Journey: ", () => {
      it('user selects "Account Balance" form the dropdown', () => {
        // TODO - Create a Journey selection Function when adding flows for more Journeys.
        //   element(
        //     by.cssContainingText("select[role='listbox']>option", "Account Balance")
        //   ).click(); (MOVED OUT AND RENAMED)
        browser.wait(EC.visibilityOf(elements.jrnySelection));
        elements.jrnySelection.click();
        // browser.sleep(3000);
        elements.submitBtn.click();
        // browser.sleep(3000);
      });
    });

    describe("Login: ", () => {
      //   const alfieWelcomeText: ElementFinder = element(
      //     by.xpath("//button[contains(text(),'Login')]")
      //   );  (MOVED OUT and RENAMED to selectLogin)

      it("user should be able to select login from structured content.", () => {
        browser.wait(EC.visibilityOf(elements.selectLogin));
        elements.selectLogin.click();
        // browser.sleep(3000);
      });

      it("user should see the notification", () => {
        // browser.waitForAngularEnabled(false);
        // TODO - Add assert on visibility of notification.
        // TODO - Add a try except block
        // const loginNotification = $("[data-lp-point='widgetNotificationText']");  (MOVED OUT)
        browser.wait(EC.visibilityOf(elements.loginNotification));
        // browser.sleep(2000);
      });

      it("should open the widget", () => {
        elements.widgetBtn.click().then(() => {
          // browser.sleep(3000);
          // browser.wait(EC.presenceOf(loginIframe1));
          // browser.wait(EC.presenceOf(loginIframe2));

          // browser.switchTo().frame($('iframe[id^="LPFRM"]').getWebElement()); (MOVED OUT/RENAMED)
          browser.switchTo().frame(elements.loginIframe1.getWebElement());
          // browser.switchTo().frame($("iframe#loginiframe2").getWebElement()); (MOVED OUT/RENAMED)
          browser.switchTo().frame(elements.loginIframe2.getWebElement());
          browser.wait(EC.visibilityOf(elements.email));
          browser.wait(EC.visibilityOf(elements.nextBtn));
          // element(
          //   by.xpath(
          //     "//label[contains(text(), 'Email or Mobile')]/following-sibling::input"
          //   )
          // ).sendKeys("shanghaiali@gmail.com"); (RENAMED/MOVEDOUT)
          elements.email.sendKeys("shanghaiali@gmail.com");
          // browser.sleep(2000);
          elements.nextBtn.click();
          // browser.sleep(3000);
          browser.wait(EC.visibilityOf(elements.password));
          browser.wait(EC.visibilityOf(elements.loginBtn));
          elements.password.sendKeys("Welcome@1");
          // browser.sleep(3000);
          elements.loginBtn.click();
          // browser.sleep(3000);
          browser.switchTo().defaultContent();
        });
      });
    });

    describe("Display Account Balance: ", () => {
      it("gas bill should be displayed", () => {
        // browser.sleep(2000);
        browser.wait(EC.visibilityOf(elements.gasBill)).then(() => {
          elements.gasBill.getText().then(text => {
            // browser.sleep(3000);
            console.log(`The Gas bill is : ${text}`);
            // browser.sleep(2000);
          });
        });
      });

      it("electricity bill should be displayed", () => {
        // browser.sleep(2000);
        browser.wait(EC.visibilityOf(elements.elecBill)).then(() => {
          elements.elecBill.getText().then(text => {
            // browser.sleep(3000);
            console.log(`The Elec bill is : ${text}`);
            // browser.sleep(2000);
          });
        });
      });
    });
  });
});
