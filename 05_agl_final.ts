import {
  $,
  $$,
  browser,
  by,
  element,
  protractor,
  ElementFinder,
  WebElementPromise
} from "protractor";

import { ExpectedConditions as EC } from "protractor";

describe("Smoke Test: Alfiebot Webchat - ", () => {

  browser.ignoreSynchronization = true; //NOT ABLE TO USE IT FROM BEFORE ALL OR AFTER THE VARIABLE DEFINITION
  const url = "https://agldstqtrtest.digital.agl.com.au/contact-us";
  browser
    .manage() 
    .window()
    .maximize();
  // browser.manage().window().setSize(1400, 900);    //****Try to use this */

  browser.get(url);
  const campaignBtn: ElementFinder = $('img[src*="alfieavatar60x60.png"]');
  const jrnySelection: ElementFinder = element(
    by.cssContainingText("select[role='listbox']>option", "Account Balance")
  );
  const submitBtn: ElementFinder = $(".lp_submit_button");
  const selectLogin: ElementFinder = element(
    by.xpath("//button[contains(text(),'Login')]")
  );
  const loginNotification: ElementFinder = $(
    "[data-lp-point='widgetNotificationText']"
  );
  const widgetBtn: ElementFinder = $("[data-lp-point='widget_sdk']");
  const loginIframe1: ElementFinder = $('iframe[id^="LPFRM"]');
  const loginIframe2: ElementFinder = $("iframe#loginiframe2");
  const email: ElementFinder = element(
    by.xpath(
      "//label[contains(text(), 'Email or Mobile')]/following-sibling::input"
    )
  );
  const nextBtn: ElementFinder = element(by.xpath("//button[.=' Next ']"));
  const password: ElementFinder = $("[formcontrolname='password']");
  const loginBtn: ElementFinder = element(
    by.xpath("//button[contains(text(),' Login')]")
  );
  const elecBill: ElementFinder = element(
    by.xpath("//p[contains(text(),'Elec')]")
  );

  const gasBill: ElementFinder = element(
    by.xpath("//p[contains(text(),'Gas')]")
  );
  describe("Authenticated User Flow: ", () => {
    // beforeAll(() => {
    //   // browser.waitForAngularEnabled(false);
    //   // browser.ignoreSynchronization = true; // Check what is the difference between this and browseer.waitForAngularEnabled.
    //   const url = "https://agldstqtrtest.digital.agl.com.au/contact-us";
    //   browser
    //     .manage()
    //     .window()
    //     .maximize();
    //   // // browser.manage().window().setSize(1400, 900);    //****Try to use this */

    //   browser.get(url);
    // });

    describe("Click on Campaign Btn: ", () => {
      // MOVED OUT const campaignBtn = $('img[src*="alfieavatar60x60.png"]');
      browser.wait(EC.visibilityOf(campaignBtn));
      it("user should be able to click the Campaign Btn.", () => {
        // TODO add a check of clickability and try catch to retry to click the campaign button
        campaignBtn.click();
        // browser.sleep(3000);
      });
    });

    describe("Select Journey: ", () => {
      it('user selects "Account Balance" form the dropdown', () => {
        // TODO - Create a Journey selection Function when adding flows for more Journeys.
        //   element(
        //     by.cssContainingText("select[role='listbox']>option", "Account Balance")
        //   ).click(); (MOVED OUT AND RENAMED)
        browser.wait(EC.visibilityOf(jrnySelection));
        jrnySelection.click();
        // browser.sleep(3000);
        submitBtn.click();
        // browser.sleep(3000);
      });
    });

    describe("Login: ", () => {
      //   const alfieWelcomeText: ElementFinder = element(
      //     by.xpath("//button[contains(text(),'Login')]")
      //   );  (MOVED OUT and RENAMED to selectLogin)

      it("user should be able to select login from structured content.", () => {
        browser.wait(EC.visibilityOf(selectLogin));
        selectLogin.click();
        // browser.sleep(3000);
      });

      it("user should see the notification", () => {
        // browser.waitForAngularEnabled(false);
        // TODO - Add assert on visibility of notification.
        // TODO - Add a try except block
        // const loginNotification = $("[data-lp-point='widgetNotificationText']");  (MOVED OUT)
        browser.wait(EC.visibilityOf(loginNotification));
        // browser.sleep(2000);
      });

      it("should open the widget", () => {
        widgetBtn.click().then(() => {
          // browser.sleep(3000);
          // browser.wait(EC.presenceOf(loginIframe1));
          // browser.wait(EC.presenceOf(loginIframe2));

          // browser.switchTo().frame($('iframe[id^="LPFRM"]').getWebElement()); (MOVED OUT/RENAMED)
          browser.switchTo().frame(loginIframe1.getWebElement());
          // browser.switchTo().frame($("iframe#loginiframe2").getWebElement()); (MOVED OUT/RENAMED)
          browser.switchTo().frame(loginIframe2.getWebElement());
          browser.wait(EC.visibilityOf(email));
          browser.wait(EC.visibilityOf(nextBtn));
          // element(
          //   by.xpath(
          //     "//label[contains(text(), 'Email or Mobile')]/following-sibling::input"
          //   )
          // ).sendKeys("shanghaiali@gmail.com"); (RENAMED/MOVEDOUT)
          email.sendKeys("shanghaiali@gmail.com");
          // browser.sleep(2000);
          nextBtn.click();
          // browser.sleep(3000);
          browser.wait(EC.visibilityOf(password));
          browser.wait(EC.visibilityOf(loginBtn));
          password.sendKeys("Welcome@1");
          // browser.sleep(3000);
          loginBtn.click();
          // browser.sleep(3000);
          browser.switchTo().defaultContent();
        });
      });
    });

    describe("Display Account Balance: ", () => {
      it("gas bill should be displayed", () => {
        // browser.sleep(2000);
        browser.wait(EC.visibilityOf(gasBill)).then(() => {
          gasBill.getText().then(text => {
            // browser.sleep(3000);
            console.log(`The Gas bill is : ${text}`);
            // browser.sleep(2000);
          });
        });
      });

      it("electricity bill should be displayed", () => {
        // browser.sleep(2000);
        browser.wait(EC.visibilityOf(elecBill)).then(() => {
          elecBill.getText().then(text => {
            // browser.sleep(3000);
            console.log(`The Elec bill is : ${text}`);
            // browser.sleep(2000);
          });
        });
      });
    });
  });
});
