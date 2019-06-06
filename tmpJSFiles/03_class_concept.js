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
const calculator_1 = require("./pageObjects/calculator"); //Importing the class calculator, in order to be able to use the properties, create an object of the class first.
describe('Find and enter first number', () => {
    it('Open Test Website', () => __awaiter(this, void 0, void 0, function* () {
        // Its important to create an oject of the class first to be able to use the properties or functions inside it.
        let calc = new calculator_1.calculator;
        // Taking off the unncessary .then chaining of actions. as we are now using async await.
        console.log("Starting the test");
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
        yield protractor_1.browser.sleep(2000);
        yield calc.firstNum.sendKeys('3');
        console.log("First Number is found and value was entered.");
        yield calc.secondNum.sendKeys('5');
        console.log("Second Number is found and value was entered.");
        protractor_1.browser.sleep(2000);
        yield calc.goBtn.click();
        // await calc.getResult.getText().then(function (text) {
        //     console.log("This value is read using locatory type: repeater---->" + text);
        // });
        const text = yield calc.getResult.getText(); //you can either give this as const or let
        console.log("The result is ---->" + text);
    }));
});
// it('Sample test AGL Test', async() => {
//     // browser.waitForAngularEnabled(false); 
//     const url = "https://google.com";
//     const result = await request.get(url);
//     console.log(result.statusCode);
//     // browser.get();
//     // await
//     // let EC = ExpectedConditions;
//     // browser.wait(EC.visibilityOf($(".lp_main:nth-child(2)")));
//     browser.sleep(3000);
//     });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDNfY2xhc3NfY29uY2VwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLzAzX2NsYXNzX2NvbmNlcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLDJDQUFxRDtBQUdyRCx5REFBc0QsQ0FBRSxpSEFBaUg7QUFFekssUUFBUSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtJQUV6QyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBUyxFQUFFO1FBQ3ZDLCtHQUErRztRQUN2RyxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLENBQUM7UUFDbEMsd0ZBQXdGO1FBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDNUQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUE7UUFDNUQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLHdEQUF3RDtRQUN4RCxtRkFBbUY7UUFDbkYsTUFBTTtRQUNOLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFJLDBDQUEwQztRQUMxRixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUlDLDBDQUEwQztBQUMxQyxnREFBZ0Q7QUFDaEQsd0NBQXdDO0FBQ3hDLDZDQUE2QztBQUM3QyxzQ0FBc0M7QUFDdEMsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZixzQ0FBc0M7QUFDdEMsb0VBQW9FO0FBQ3BFLDJCQUEyQjtBQUczQixVQUFVIn0=