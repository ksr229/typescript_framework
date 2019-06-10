import {
    $,
    $$,
    browser,
    by,
    element,
    protractor
} from 'protractor';

import { ExpectedConditions as EC } from 'protractor';

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
        browser.ignoreSynchronization = true;    // Check what is the difference between this and browseer.waitForAngularEnabled.
        let url = "https://agldstqtrtest.digital.agl.com.au/contact-us";
        browser.manage().window().maximize();
        // const result = await request.get(url);
        // console.log(result.statusCode);
        browser.get(url);
        // await
        const campaignBtn = $$('[alt="Live chat"]').first();   // USE THIS INSTEAD img[src^="https://www.agl.com.au/-/media/AGLMedia/Images/chat/alfieavatar60x60.png"]
        // let EC = ExpectedConditions;
        // browser.wait(EC.visibilityOf(campaignBtn)).then(function(){
        //     campaignBtn.click();
        // });
        browser.wait(EC.visibilityOf(campaignBtn));
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
        browser.sleep(3000);

        // $("select[role='listbox']").click().then(()=>{
        //     browser.sleep(3000);

        //     browser.actions().
        //     sendKeys(protractor.Key.DOWN).
        //     sendKeys(protractor.Key.ENTER).
        element(by.cssContainingText("select[role='listbox']>option", "Account Balance")).click();
        // perform();
        browser.sleep(3000);
        $(".lp_submit_button").click()
        browser.sleep(3000);
        const alfieWelcomeText = element(by.xpath("//button[contains(text(),'Login')]"));
        browser.wait(EC.visibilityOf(alfieWelcomeText));
        alfieWelcomeText.click();
        browser.sleep(3000);
        const loginNotification = $("[data-lp-point='widgetNotificationText']");
        browser.wait(EC.visibilityOf(loginNotification));
        $("[data-lp-point='widget_sdk']").click().then(() => {

            // browser.ignoreSynchronization = false;
            browser.sleep(3000);

            // browser.switchTo().frame($('#fr_83695_75293').getWebElement());
            browser.switchTo().frame($('iframe[id^="LPFRM"]').getWebElement());
            browser.switchTo().frame($('iframe#loginiframe2').getWebElement());
            // browser.ignoreSynchronization = true;
            element(by.xpath("//label[contains(text(), 'Email or Mobile')]/following-sibling::input")).sendKeys("shanghaiali@gmail.com");
            browser.sleep(2000);
            element(by.xpath("//button[.=' Next ']")).click();
            browser.sleep(3000);
            $("[formcontrolname='password']").sendKeys("Welcome@1");
            browser.sleep(3000);
            element(by.xpath("//button[contains(text(),' Login')]")).click();
            browser.sleep(3000);
            browser.switchTo().defaultContent();
            // browser.switchTo().defaultContent();
            browser.sleep(2000);
            browser.wait(EC.visibilityOf(element(by.xpath("//p[contains(text(),'Gas')]")))).then(()=>{
                // 
                element(by.xpath("//p[contains(text(),'Gas')]")).getText().then((text)=>{
                    console.log(`The gas bill is displayed: ${text}`);
                    browser.sleep(2000);
                    // browser.ignoreSynchronization = false;
                });
                
            });
            // browser.wait(EC.visibilityOf(element(by.xpath("//p[contains(text(),'Gas')]"))));
            // console.log(`The gas bill is displayed: ${element(by.xpath("//p[contains(text(),'Gas')]")).getText()}`);


        });


        // });







    });

});