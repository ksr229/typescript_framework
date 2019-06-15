"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
describe("Smoke Test: Alfiebot Webchat - ", () => {
    protractor_1.browser.ignoreSynchronization = true; //NOT ABLE TO USE IT FROM BEFORE ALL OR AFTER THE VARIABLE DEFINITION
    const url = "https://agldstqtrtest.digital.agl.com.au/contact-us";
    protractor_1.browser
        .manage()
        .window()
        .maximize();
    // browser.manage().window().setSize(1400, 900);    //****Try to use this */
    protractor_1.browser.get(url);
    const campaignBtn = protractor_1.$('img[src*="alfieavatar60x60.png"]');
    const jrnySelection = protractor_1.element(protractor_1.by.cssContainingText("select[role='listbox']>option", "Account Balance"));
    const submitBtn = protractor_1.$(".lp_submit_button");
    const selectLogin = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Login')]"));
    const loginNotification = protractor_1.$("[data-lp-point='widgetNotificationText']");
    const widgetBtn = protractor_1.$("[data-lp-point='widget_sdk']");
    const loginIframe1 = protractor_1.$('iframe[id^="LPFRM"]');
    const loginIframe2 = protractor_1.$("iframe#loginiframe2");
    const email = protractor_1.element(protractor_1.by.xpath("//label[contains(text(), 'Email or Mobile')]/following-sibling::input"));
    const nextBtn = protractor_1.element(protractor_1.by.xpath("//button[.=' Next ']"));
    const password = protractor_1.$("[formcontrolname='password']");
    const loginBtn = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),' Login')]"));
    const elecBill = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Elec')]"));
    const gasBill = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Gas')]"));
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
            protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(campaignBtn));
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
                protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(jrnySelection));
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
                protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(selectLogin));
                selectLogin.click();
                // browser.sleep(3000);
            });
            it("user should see the notification", () => {
                // browser.waitForAngularEnabled(false);
                // TODO - Add assert on visibility of notification.
                // TODO - Add a try except block
                // const loginNotification = $("[data-lp-point='widgetNotificationText']");  (MOVED OUT)
                protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(loginNotification));
                // browser.sleep(2000);
            });
            it("should open the widget", () => {
                widgetBtn.click().then(() => {
                    // browser.sleep(3000);
                    // browser.wait(EC.presenceOf(loginIframe1));
                    // browser.wait(EC.presenceOf(loginIframe2));
                    // browser.switchTo().frame($('iframe[id^="LPFRM"]').getWebElement()); (MOVED OUT/RENAMED)
                    protractor_1.browser.switchTo().frame(loginIframe1.getWebElement());
                    // browser.switchTo().frame($("iframe#loginiframe2").getWebElement()); (MOVED OUT/RENAMED)
                    protractor_1.browser.switchTo().frame(loginIframe2.getWebElement());
                    protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(email));
                    protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(nextBtn));
                    // element(
                    //   by.xpath(
                    //     "//label[contains(text(), 'Email or Mobile')]/following-sibling::input"
                    //   )
                    // ).sendKeys("shanghaiali@gmail.com"); (RENAMED/MOVEDOUT)
                    email.sendKeys("shanghaiali@gmail.com");
                    // browser.sleep(2000);
                    nextBtn.click();
                    // browser.sleep(3000);
                    protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(password));
                    protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(loginBtn));
                    password.sendKeys("Welcome@1");
                    // browser.sleep(3000);
                    loginBtn.click();
                    // browser.sleep(3000);
                    protractor_1.browser.switchTo().defaultContent();
                });
            });
        });
        describe("Display Account Balance: ", () => {
            it("gas bill should be displayed", () => {
                // browser.sleep(2000);
                protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(gasBill)).then(() => {
                    gasBill.getText().then(text => {
                        // browser.sleep(3000);
                        console.log(`The Gas bill is : ${text}`);
                        // browser.sleep(2000);
                    });
                });
            });
            it("electricity bill should be displayed", () => {
                // browser.sleep(2000);
                protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(elecBill)).then(() => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDVfYWdsX2ZpbmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vMDVfYWdsX2ZpbmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBU29CO0FBRXBCLDJDQUFzRDtBQUV0RCxRQUFRLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxFQUFFO0lBRS9DLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLENBQUMscUVBQXFFO0lBQzNHLE1BQU0sR0FBRyxHQUFHLHFEQUFxRCxDQUFDO0lBQ2xFLG9CQUFPO1NBQ0osTUFBTSxFQUFFO1NBQ1IsTUFBTSxFQUFFO1NBQ1IsUUFBUSxFQUFFLENBQUM7SUFDZCw0RUFBNEU7SUFFNUUsb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsTUFBTSxXQUFXLEdBQWtCLGNBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ3pFLE1BQU0sYUFBYSxHQUFrQixvQkFBTyxDQUMxQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsK0JBQStCLEVBQUUsaUJBQWlCLENBQUMsQ0FDekUsQ0FBQztJQUNGLE1BQU0sU0FBUyxHQUFrQixjQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN4RCxNQUFNLFdBQVcsR0FBa0Isb0JBQU8sQ0FDeEMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUMvQyxDQUFDO0lBQ0YsTUFBTSxpQkFBaUIsR0FBa0IsY0FBQyxDQUN4QywwQ0FBMEMsQ0FDM0MsQ0FBQztJQUNGLE1BQU0sU0FBUyxHQUFrQixjQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNuRSxNQUFNLFlBQVksR0FBa0IsY0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDN0QsTUFBTSxZQUFZLEdBQWtCLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzdELE1BQU0sS0FBSyxHQUFrQixvQkFBTyxDQUNsQyxlQUFFLENBQUMsS0FBSyxDQUNOLHVFQUF1RSxD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