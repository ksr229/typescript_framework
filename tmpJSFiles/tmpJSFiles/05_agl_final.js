"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
describe("Smoke Test: Alfiebot Webchat - ", () => {
    let url = "https://agldstqtrtest.digital.agl.com.au/contact-us";
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
    describe("Authenticated User Flow: ", () => {
        beforeAll(() => {
            // browser.waitForAngularEnabled(false);
            protractor_1.browser.ignoreSynchronization = true; // Check what is the difference between this and browseer.waitForAngularEnabled.
            //   let url = "https://agldstqtrtest.digital.agl.com.au/contact-us"; (MOVED OUT)
            protractor_1.browser
                .manage()
                .window()
                .maximize();
            // browser.manage().window().setSize(1400, 900);    //****Try to use this */
            protractor_1.browser.get(url);
        });
        describe("Click on Campaign Btn: ", () => {
            // MOVED OUT const campaignBtn = $('img[src*="alfieavatar60x60.png"]');
            protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(campaignBtn));
            it("user should be able to click the Campaign Btn.", () => {
                // TODO add a check of clickability and try catch to retry to click the campaign button
                campaignBtn.click();
                protractor_1.browser.sleep(3000);
            });
        });
        describe("Select Journey: ", () => {
            it('user selects "Account Balance" form the dropdown', () => {
                // TODO - Create a Journey selection Function when adding flows for more Journeys.
                //   element(
                //     by.cssContainingText("select[role='listbox']>option", "Account Balance")
                //   ).click(); (MOVED OUT AND RENAMED)
                jrnySelection.click();
                protractor_1.browser.sleep(3000);
                submitBtn.click();
                protractor_1.browser.sleep(3000);
            });
        });
        describe("Login: ", () => {
            //   const alfieWelcomeText: ElementFinder = element(
            //     by.xpath("//button[contains(text(),'Login')]")
            //   );  (MOVED OUT and RENAMED to selectLogin)
            it("user should be able to select login from structured content.", () => {
                protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(selectLogin));
                selectLogin.click();
                protractor_1.browser.sleep(3000);
            });
            it("user should see the notification and open widget", () => {
                // TODO - Add assert on visibility of notification.
                // TODO - Add a try except block
                // const loginNotification = $("[data-lp-point='widgetNotificationText']");  (MOVED OUT)
                protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(loginNotification));
            });
            it("Test rest of the stuff", () => {
                widgetBtn.click().then(() => __awaiter(this, void 0, void 0, function* () {
                    protractor_1.browser.sleep(3000);
                    // browser.switchTo().frame($('iframe[id^="LPFRM"]').getWebElement()); (MOVED OUT/RENAMED)
                    protractor_1.browser.switchTo().frame(loginIframe1);
                    // browser.switchTo().frame($("iframe#loginiframe2").getWebElement()); (MOVED OUT/RENAMED)
                    protractor_1.browser.switchTo().frame(loginIframe2);
                    // element(
                    //   by.xpath(
                    //     "//label[contains(text(), 'Email or Mobile')]/following-sibling::input"
                    //   )
                    // ).sendKeys("shanghaiali@gmail.com"); (RENAMED/MOVEDOUT)
                    email.sendKeys("shanghaiali@gmail.com");
                    protractor_1.browser.sleep(2000);
                    nextBtn.click();
                    protractor_1.browser.sleep(3000);
                    password.sendKeys("Welcome@1");
                    protractor_1.browser.sleep(3000);
                    loginBtn.click();
                    protractor_1.browser.sleep(3000);
                    protractor_1.browser.switchTo().defaultContent();
                    protractor_1.browser.sleep(2000);
                    protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(elecBill)).then(() => {
                        elecBill.getText().then(text => {
                            protractor_1.browser.sleep(3000);
                            console.log(`The Elec bill is : ${text}`);
                            protractor_1.browser.sleep(2000);
                        });
                    });
                }));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDVfYWdsX2ZpbmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vMDVfYWdsX2ZpbmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FTb0I7QUFFcEIsMkNBQXNEO0FBRXRELFFBQVEsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLEVBQUU7SUFDL0MsSUFBSSxHQUFHLEdBQUcscURBQXFELENBQUM7SUFDaEUsTUFBTSxXQUFXLEdBQWtCLGNBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ3pFLE1BQU0sYUFBYSxHQUFrQixvQkFBTyxDQUMxQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsK0JBQStCLEVBQUUsaUJBQWlCLENBQUMsQ0FDekUsQ0FBQztJQUNGLE1BQU0sU0FBUyxHQUFrQixjQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN4RCxNQUFNLFdBQVcsR0FBa0Isb0JBQU8sQ0FDeEMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUMvQyxDQUFDO0lBQ0YsTUFBTSxpQkFBaUIsR0FBa0IsY0FBQyxDQUN4QywwQ0FBMEMsQ0FDM0MsQ0FBQztJQUNGLE1BQU0sU0FBUyxHQUFrQixjQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNuRSxNQUFNLFlBQVksR0FBa0IsY0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDN0QsTUFBTSxZQUFZLEdBQWtCLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzdELE1BQU0sS0FBSyxHQUFrQixvQkFBTyxDQUNsQyxlQUFFLENBQUMsS0FBSyxDQUNOLHVFQUF1RSxDQUN4RSxDQUNGLENBQUM7SUFDRixNQUFNLE9BQU8sR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUN6RSxNQUFNLFFBQVEsR0FBa0IsY0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDbEUsTUFBTSxRQUFRLEdBQWtC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