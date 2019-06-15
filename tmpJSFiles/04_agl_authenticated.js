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
        // browser.manage().window().setSize(1400, 900);    //****Try to use this */
        protractor_1.browser.get(url);
        // await
        // const campaignBtn = $$('[alt="Live chat"]').first();   // USE THIS INSTEAD img[src*="alfieavatar60x60.png"]
        const campaignBtn = protractor_1.$('img[src*="alfieavatar60x60.png"]');
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
        protractor_1.$("[data-lp-point='widget_sdk']").click().then(() => __awaiter(this, void 0, void 0, function* () {
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
            protractor_1.browser.wait(protractor_2.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Elec')]")))).then(() => {
                // 
                // element(by.xpath("//p[contains(text(),'Gas')]")).getText().then((text) => {
                //     browser.sleep(3000);
                //     console.log(`The gas bill is : ${text}`);
                //     browser.sleep(2000);
                //     // browser.ignoreSynchronization = false;
                // });
                protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Elec')]")).getText().then((text) => {
                    protractor_1.browser.sleep(3000);
                    console.log(`The Elec bill is : ${text}`);
                    protractor_1.browser.sleep(2000);
                    // browser.ignoreSynchronization = false;
                });
            });
            // browser.wait(EC.visibilityOf(element(by.xpath("//p[contains(text(),'Gas')]"))));
            // console.log(`The gas bill is displayed: ${element(by.xpath("//p[contains(text(),'Gas')]")).getText()}`);
        }));
        // });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDRfYWdsX2F1dGhlbnRpY2F0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8wNF9hZ2xfYXV0aGVudGljYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBT29CO0FBRXBCLDJDQUFzRDtBQUV0RCw0S0FBNEs7QUFDNUssRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7O0tBYUs7QUFDTCxRQUFRLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO0lBRXpDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7UUFDNUIsd0NBQXdDO1FBQ3hDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLENBQUksZ0ZBQWdGO1FBQ3pILElBQUksR0FBRyxHQUFHLHFEQUFxRCxDQUFDO1FBQ2hFLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEMsNEVBQTRFO1FBRTNFLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLFFBQVE7UUFDUiw4R0FBOEc7UUFDOUcsTUFBTSxXQUFXLEdBQUcsY0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDMUQsK0JBQStCO1FBQy9CLDhEQUE4RDtRQUM5RCwyQkFBMkI7UUFDM0IsTUFBTTtRQUNOLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLHVCQUF1QjtRQUN2QixxQ0FBcUM7UUFFckMsdUNBQXVDO1FBQ3ZDLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsZ0dBQWdHO1FBQ2hHLCtDQUErQztRQUMvQyxXQUFXO1FBQ1gsa0NBQWtDO1FBQ2xDLGNBQWM7UUFDZCxhQUFhO1FBQ2Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsaURB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