import { Given, When, Then } from "cucumber";           // This is to use the cucumber keywords
import { calculator } from "../pageObjects/calculator";
import { browser } from "protractor";
let calc = new calculator();                            // This is to import all the page objects for the page.
const assert = require('assert')                        //This is to use assert inside the step definition file as the expect is not identified by cucumber.

// This contains the opening of the webpage 
Given('Navigate to the calculator website', async () => {
    // Write code here that turns the phrase above into concrete actions
    console.log("Starting the test");
    await browser.manage().window().maximize();
    await browser.get('https://juliemr.github.io/protractor-demo/');

});

When('Enter two numbers {string} and {string}', async (string, string2) => {
    // Write code here that turns the phrase above into concrete actions
    let calc = new calculator();
    await calc.firstNum.sendKeys(string);

    await calc.secondNum.sendKeys(string2);
});

When('click on Go.', async () => {
    // Write code here that turns the phrase above into concrete actions
    await calc.goBtn.click();
});

Then('Sum of two numbers is displayed', async () => {
    // Write code here that turns the phrase above into concrete actions
    console.log(`The Result is displayed: ${await calc.getResult.isDisplayed()}`);
});

Then('is equal to {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    const text = await calc.getResult.getText();
    console.log(text);
    assert.equal(text,string);
});