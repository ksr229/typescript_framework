
import { browser, element, by, $ } from 'protractor';
import { ExpectedConditions as EC } from 'protractor';
import * as request from "request-promise-native";
import { calculator } from "./pageObjects/calculator";  //Importing the class calculator, in order to be able to use the properties, create an object of the class first.

describe('Find and enter first number', () => {

    it('Open Test Website', async () => {
// Its important to create an oject of the class first to be able to use the properties or functions inside it.
        let calc = new calculator;
// Taking off the unncessary .then chaining of actions. as we are now using async await.
        console.log("Starting the test");
        await browser.manage().window().maximize();
        await browser.get('https://juliemr.github.io/protractor-demo/');
        await browser.sleep(2000);
        await calc.firstNum.sendKeys('3');
        console.log("First Number is found and value was entered.");
        await calc.secondNum.sendKeys('5');
        console.log("Second Number is found and value was entered.")
        browser.sleep(2000);
        await calc.goBtn.click();
        // await calc.getResult.getText().then(function (text) {
        //     console.log("This value is read using locatory type: repeater---->" + text);
        // });
        const text = await calc.getResult.getText();    //you can either give this as const or let
        console.log("The result is ---->" + text);
    });
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

