"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
describe("Smoke Test: Alfiebot Webchat - ", () => {
    const url = "https://agldstqtrtest.digital.agl.com.au/contact-us";
    const elements = {
        campaignBtn: protractor_1.$('img[src*="alfieavatar60x60.png"]'),
        jrnySelection: protractor_1.element(protractor_1.by.cssContainingText("select[role='listbox']>option", "Account Balance")),
        submitBtn: protractor_1.$(".lp_submit_button"),
        selectLogin: protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Login')]")),
        loginNotification: protractor_1.$("[data-lp-point='widgetNotificationText']"),
        widgetBtn: protractor_1.$("[data-lp-point='widget_sdk']"),
        loginIframe1: protractor_1.$('iframe[id^="LPFRM"]'),
        loginIframe2: protractor_1.$("iframe#loginiframe2"),
        email: protractor_1.element(protractor_1.by.xpath("//label[contains(text(), 'Email or Mobile')]/following-sibling::input")),
        nextBtn: protractor_1.element(protractor_1.by.xpath("//button[.=' Next ']")),
        password: protractor_1.$("[formcontrolname='password']"),
        loginBtn: protractor_1.element(protractor_1.by.xpath("//button[contains(text(),' Login')]")),
        elecBill: protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Elec')]")),
        gasBill: protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Gas')]"))
    };
    describe("Authenticated User Flow: ", () => {
        beforeAll(() => {
            protractor_1.browser.ignoreSynchronization = true;
            protractor_1.browser
                .manage()
                .window()
                .maximize();
            protractor_1.browser.get(url);
        });
        describe("Click on Campaign Btn: ", () => {
            it("user should be able to click the Campaign Btn.", () => {
                protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(elements.campaignBtn));
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
                protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(elements.jrnySelection));
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
                protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(elements.selectLogin));
                elements.selectLogin.click();
                // browser.sleep(3000);
            });
            it("user should see the notification", () => {
                // browser.waitForAngularEnabled(false);
                // TODO - Add assert on visibility of notification.
                // TODO - Add a try except block
                // const loginNotification = $("[data-lp-point='widgetNotificationText']");  (MOVED OUT)
                protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(elements.loginNotification));
                // browser.sleep(2000);
            });
            it("should open the widget", () => {
                elements.widgetBtn.click().then(() => {
                    // browser.sleep(3000);
                    // browser.wait(EC.presenceOf(loginIframe1));
                    // browser.wait(EC.presenceOf(loginIframe2));
                    // browser.switchTo().frame($('iframe[id^="LPFRM"]').getWebElement()); (MOVED OUT/RENAMED)
                    protractor_1.browser.switchTo().frame(elements.loginIframe1.getWebElement());
                    // browser.switchTo().frame($("iframe#loginiframe2").getWebElement()); (MOVED OUT/RENAMED)
                    protractor_1.browser.switchTo().frame(elements.loginIframe2.getWebElement());
                    protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(elements.email));
                    protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(elements.nextBtn));
                    // element(
                    //   by.xpath(
                    //     "//label[contains(text(), 'Email or Mobile')]/following-sibling::input"
                    //   )
                    // ).sendKeys("shanghaiali@gmail.com"); (RENAMED/MOVEDOUT)
                    elements.email.sendKeys("shanghaiali@gmail.com");
                    // browser.sleep(2000);
                    elements.nextBtn.click();
                    // browser.sleep(3000);
                    protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(elements.password));
                    protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(elements.loginBtn));
                    elements.password.sendKeys("Welcome@1");
                    // browser.sleep(3000);
                    elements.loginBtn.click();
                    // browser.sleep(3000);
                    protractor_1.browser.switchTo().defaultContent();
                });
            });
        });
        describe("Display Account Balance: ", () => {
            it("gas bill should be displayed", () => {
                // browser.sleep(2000);
                protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(elements.gasBill)).then(() => {
                    elements.gasBill.getText().then(text => {
                        // browser.sleep(3000);
                        console.log(`The Gas bill is : ${text}`);
                        // browser.sleep(2000);
                    });
                });
            });
            it("electricity bill should be displayed", () => {
                // browser.sleep(2000);
                protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(elements.elecBill)).then(() => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDZfYWdsX2ZpbmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vMDZfYWdsX2ZpbmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXFEO0FBRXJELDJDQUFzRDtBQUV0RCxRQUFRLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxFQUFFO0lBQy9DLE1BQU0sR0FBRyxHQUFHLHFEQUFxRCxDQUFDO0lBQ2xFLE1BQU0sUUFBUSxHQUFHO1FBQ2YsV0FBVyxFQUFFLGNBQUMsQ0FBQyxrQ0FBa0MsQ0FBQztRQUNsRCxhQUFhLEVBQUUsb0JBQU8sQ0FDcEIsZUFBRSxDQUFDLGlCQUFpQixDQUFDLCtCQUErQixFQUFFLGlCQUFpQixDQUFDLENBQ3pFO1FBQ0QsU0FBUyxFQUFFLGNBQUMsQ0FBQyxtQkFBbUIsQ0FBQztRQUNqQyxXQUFXLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDcEUsaUJBQWlCLEVBQUUsY0FBQyxDQUFDLDBDQUEwQyxDQUFDO1FBQ2hFLFNBQVMsRUFBRSxjQUFDLENBQUMsOEJBQThCLENBQUM7UUFDNUMsWUFBWSxFQUFFLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxZQUFZLEVBQUUsY0FBQyxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLEtBQUssRUFBRSxvQkFBTyxDQUNaLGVBQUUsQ0FBQyxLQUFLLENBQ04sdUVBQXVFLENBQ3hFLENBQ0Y7UUFDRCxPQUFPLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbEQsUUFBUSxFQUFFLGNBQUMsQ0FBQyw4QkFBOEIsQ0FBQztRQUMzQyxRQUFRLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDbEUsUUFBUSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBRTNE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