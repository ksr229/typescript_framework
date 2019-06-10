"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
// import { calculator } from "./pageObjects/calculator";  //Importing the class calculator, in order to be able to use the properties, create an object of the class first.
//
/** campaignBtn = $('.LPMcontainer>img[alt="Live chat"]')
 *  dropDown = select[role='listbox']
 * submitBtn = .lp_submit_button
 * agentTyping = [data-lp-point='agent_is_typing']
 * chatcontainer = [data-lp-point='lines_area']
 * lastWelcomeLine = //p[starts-with(text(),'What can')]
 * enterText = $('.lp_input_area')
 * widget = $('.lp-slider-icon.lp_icon-dark')
 * iframe1 = fr_83695_75293
 *
 * iframe3 = $('#loginiframe2')      //iframe#loginiframe2
 * nextBtn = by.xpath("//button[contains(text(),'Next')]")
 *
 * */
describe('Find and enter first number', () => {
    it('Sample test AGL Test', () => {
        // browser.waitForAngularEnabled(false);
        protractor_1.browser.ignoreSynchronization = true; // Check what is the difference between this and browseer.waitForAngularEnabled.
        let url = "https://agldstqtrtest.digital.agl.com.au/contact-us";
        protractor_1.browser.manage().window().maximize();
        // const result = await request.get(url);
        // console.log(result.statusCode);
        protractor_1.browser.get(url);
        // await
        const campaignBtn = protractor_1.$$('[alt="Live chat"]').first();
        // let EC = ExpectedConditions;
        // browser.wait(EC.visibilityOf(campaignBtn)).then(function(){
        //     campaignBtn.click();
        // });
        protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(campaignBtn));
        campaignBtn.click();
        // browser.sleep(3000);
        // // $('[alt="Live chat"]').click();
        // $("select[role='listbox']").click();
        // browser.sleep(3000);
        // browser.actions().
        // mouseDown(element(by.cssContainingText("select[role='listbox']>option", "Account Balance"))).
        // // mouseDown($("select>option[value='7']")).
        // click().
        // sendKeys(protractor.Key.ENTER).
        // // click().
        // perform();
        protractor_1.browser.sleep(3000);
        // $("select[role='listbox']").click().then(()=>{
        //     browser.sleep(3000);
        //     browser.actions().
        //     sendKeys(protractor.Key.DOWN).
        //     sendKeys(protractor.Key.ENTER).
        protractor_1.element(protractor_1.by.cssContainingText("select[role='listbox']>option", "Account Balance")).click();
        // perform();
        protractor_1.browser.sleep(3000);
        protractor_1.$(".lp_submit_button").click();
        protractor_1.browser.sleep(3000);
        const alfieWelcomeText = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Login')]"));
        protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(alfieWelcomeText));
        alfieWelcomeText.click();
        protractor_1.browser.sleep(3000);
        const loginNotification = protractor_1.$("[data-lp-point='widgetNotificationText']");
        protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(loginNotification));
        protractor_1.$("[data-lp-point='widget_sdk']").click().then(() => {
            // browser.ignoreSynchronization = false;
            protractor_1.browser.sleep(3000);
            // browser.switchTo().frame($('#fr_83695_75293').getWebElement());
            protractor_1.browser.switchTo().frame(protractor_1.$('iframe[id^="LPFRM"]').getWebElement());
            protractor_1.browser.switchTo().frame(protractor_1.$('iframe#loginiframe2').getWebElement());
            // browser.ignoreSynchronization = true;
            protractor_1.element(protractor_1.by.xpath("//label[contains(text(), 'Email or Mobile')]/following-sibling::input")).sendKeys("shanghaiali@gmail.com");
            protractor_1.browser.sleep(2000);
            protractor_1.element(protractor_1.by.xpath("//button[.=' Next ']")).click();
            protractor_1.browser.sleep(3000);
            protractor_1.$("[formcontrolname='password']").sendKeys("Welcome@1");
            protractor_1.browser.sleep(3000);
            protractor_1.element(protractor_1.by.xpath("//button[contains(text(),' Login')]")).click();
            protractor_1.browser.sleep(3000);
            protractor_1.browser.switchTo().defaultContent();
            // browser.switchTo().defaultContent();
            protractor_1.browser.sleep(2000);
            protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Gas')]")))).then(() => {
                // 
                protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Gas')]")).getText().then((text) => {
                    console.log(`The gas bill is displayed: ${text}`);
                    protractor_1.browser.sleep(2000);
                    // browser.ignoreSynchronization = false;
                });
            });
            // browser.wait(EC.visibilityOf(element(by.xpath("//p[contains(text(),'Gas')]"))));
            // console.log(`The gas bill is displayed: ${element(by.xpath("//p[contains(text(),'Gas')]")).getText()}`);
        });
        // });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDRfYWdsX2F1dGhlbnRpY2F0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8wNF9hZ2xfYXV0aGVudGljYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQU9vQjtBQUVwQiwyQ0FBc0Q7QUFFdEQsNEtBQTRLO0FBQzVLLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7OztLQWFLO0FBQ0wsUUFBUSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtJQUV6QyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFO1FBQzVCLHdDQUF3QztRQUN4QyxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxDQUFJLGdGQUFnRjtRQUN6SCxJQUFJLEdBQUcsR0FBRyxxREFBcUQsQ0FBQztRQUNoRSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLHlDQUF5QztRQUN6QyxrQ0FBa0M7UUFDbEMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsUUFBUTtRQUNSLE1BQU0sV0FBVyxHQUFHLGVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BELCtCQUErQjtRQUMvQiw4REFBOEQ7UUFDOUQsMkJBQTJCO1FBQzNCLE1BQU07UUFDTixvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzNDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQix1QkFBdUI7UUFDdkIscUNBQXFDO1FBRXJDLHVDQUF1QztRQUN2Qyx1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLGdHQUFnRztRQUNoRywrQ0FBK0M7UUFDL0MsV0FBVztRQUNYLGtDQUFrQztRQUNsQyxjQUFjO1FBQ2QsYUFBYTtRQUNiLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FB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