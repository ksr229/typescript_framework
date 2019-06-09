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
// import { calculator } from "./pageObjects/calculator";  //Importing the class calculator, in order to be able to use the properties, create an object of the class first.
describe('Find and enter first number', () => {
    //     it('Open Test Website', async () => {
    // // Its important to create an oject of the class first to be able to use the properties or functions inside it.
    //         let calc = new calculator;
    // // Taking off the unncessary .then chaining of actions. as we are now using async await.
    //         console.log("Starting the test");
    //         await browser.manage().window().maximize();
    //         await browser.get('https://juliemr.github.io/protractor-demo/');
    //         await browser.sleep(2000);
    //         await calc.firstNum.sendKeys('3');
    //         console.log("First Number is found and value was entered.");
    //         await calc.secondNum.sendKeys('5');
    //         console.log("Second Number is found and value was entered.")
    //         browser.sleep(2000);
    //         await calc.goBtn.click();
    //         // await calc.getResult.getText().then(function (text) {
    //         //     console.log("This value is read using locatory type: repeater---->" + text);
    //         // });
    //         const text = await calc.getResult.getText();    //you can either give this as const or let
    //         console.log("The result is ---->" + text);
    //     });
    // });
    it('Sample test AGL Test', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let url = "https://agldstqtrtest.digital.agl.com.au/contact-us";
        protractor_1.browser.manage().window().maximize();
        // const result = await request.get(url);
        // console.log(result.statusCode);
        protractor_1.browser.get(url);
        // await
        // let EC = ExpectedConditions;
        // browser.wait(EC.visibilityOf($(".lp_main:nth-child(2)")));
        protractor_1.browser.sleep(3000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDRfYWdsX2F1dGhlbnRpY2F0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8wNF9hZ2xfYXV0aGVudGljYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsMkNBQXFEO0FBR3JELDRLQUE0SztBQUU1SyxRQUFRLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO0lBRXpDLDRDQUE0QztJQUM1QyxrSEFBa0g7SUFDbEgscUNBQXFDO0lBQ3JDLDJGQUEyRjtJQUMzRiw0Q0FBNEM7SUFDNUMsc0RBQXNEO0lBQ3RELDJFQUEyRTtJQUMzRSxxQ0FBcUM7SUFDckMsNkNBQTZDO0lBQzdDLHVFQUF1RTtJQUN2RSw4Q0FBOEM7SUFDOUMsdUVBQXVFO0lBQ3ZFLCtCQUErQjtJQUMvQixvQ0FBb0M7SUFDcEMsbUVBQW1FO0lBQ25FLDhGQUE4RjtJQUM5RixpQkFBaUI7SUFDakIscUdBQXFHO0lBQ3JHLHFEQUFxRDtJQUNyRCxVQUFVO0lBQ1YsTUFBTTtJQUVOLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxHQUFTLEVBQUU7UUFDbEMsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQyxJQUFJLEdBQUcsR0FBRyxxREFBcUQsQ0FBQztRQUNoRSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLHlDQUF5QztRQUN6QyxrQ0FBa0M7UUFDbEMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsUUFBUTtRQUNSLCtCQUErQjtRQUMvQiw2REFBNkQ7UUFDN0Qsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFHeEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIn0=