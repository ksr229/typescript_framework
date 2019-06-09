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
 * iframeLogin = $('#loginiframe2')
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
            protractor_1.browser.ignoreSynchronization = false;
            protractor_1.browser.sleep(3000);
            protractor_1.browser.switchTo().frame(protractor_1.$('iframe[id^="LPFRM"]').getWebElement());
            protractor_1.browser.switchTo().frame(protractor_1.$('#loginiframe2').getWebElement());
            protractor_1.browser.ignoreSynchronization = true;
            protractor_1.element(protractor_1.by.xpath("//label[contains(text(), 'Email or Mobile')][1]")).sendKeys("shanghaiali@gmail.com");
            // browser.sleep(2000);
        });
        // browser.switchTo().frame($('iframe[id^="LPFRM"]').getWebElement()).then(() => {
        //     browser.switchTo().frame($('##loginiframe2').getWebElement()).then(() => {
        //         element(by.xpath("//label[contains(text(), 'Email or Mobile')][1]")).sendKeys("shanghaiali@gmail.com");
        //         browser.sleep(2000);
        //     });
        // });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDRfYWdsX2F1dGhlbnRpY2F0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8wNF9hZ2xfYXV0aGVudGljYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQU9vQjtBQUVwQiwyQ0FBc0Q7QUFFdEQsNEtBQTRLO0FBQzVLLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7S0FXSztBQUNMLFFBQVEsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLEVBQUU7SUFFekMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRTtRQUM1Qix3Q0FBd0M7UUFDeEMsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsQ0FBSSxnRkFBZ0Y7UUFDekgsSUFBSSxHQUFHLEdBQUcscURBQXFELENBQUM7UUFDaEUsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyx5Q0FBeUM7UUFDekMsa0NBQWtDO1FBQ2xDLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLFFBQVE7UUFDUixNQUFNLFdBQVcsR0FBRyxlQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwRCwrQkFBK0I7UUFDL0IsOERBQThEO1FBQzlELDJCQUEyQjtRQUMzQixNQUFNO1FBQ04sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMzQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsdUJBQXVCO1FBQ3ZCLHFDQUFxQztRQUVyQyx1Q0FBdUM7UUFDdkMsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQixnR0FBZ0c7UUFDaEcsK0NBQStDO1FBQy9DLFdBQVc7UUFDWCxrQ0FBa0M7UUFDbEMsY0FBYztRQUNkLGFBQWE7UUFDYixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixpREFBaUQ7UUFDakQsMkJBQTJCO1FBRTNCLHlCQUF5QjtRQUN6QixxQ0FBcUM7UUFDckMsc0NBQXNDO1FBQ3RDLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLCtCQUErQixFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxRixhQUFhO1FBQ2Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsY0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDOUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFFLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUNoRCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLGlCQUFpQixHQUFHLGNBQUMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBQ3hFLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFFLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNqRCxjQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBRWhELG9CQUFPLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1lBQ3RDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDbkUsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDN0Qsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7WUFDckMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN2Ryx1QkFBdUI7UUFFM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxrRkFBa0Y7UUFFbEYsaUZBQWlGO1FBQ2pGLGtIQUFrSDtRQUNsSCwrQkFBK0I7UUFDL0IsVUFBVTtRQUVWLE1BQU07SUFRVixDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIn0=