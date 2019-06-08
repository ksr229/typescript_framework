"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber"); // This is to use the cucumber keywords
const calculator_1 = require("../pageObjects/calculator");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai")); // CHAI is an assertion library                               
let calc = new calculator_1.calculator(); // This is to import all the page objects for the page.
// const assert = require('assert')                        //This is to use ASSERT inside the step definition file as the expect is not identified by cucumber.
var expect = chai_1.default.expect; // This is required to use CHAI assertion library. 
// This contains the opening of the webpage 
cucumber_1.Given('Navigate to the calculator website', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Starting the test");
    yield protractor_1.browser.manage().window().maximize();
    yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('Enter two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    let calc = new calculator_1.calculator();
    yield calc.firstNum.sendKeys(string);
    yield calc.secondNum.sendKeys(string2);
}));
cucumber_1.When('click on Go.', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.goBtn.click();
}));
cucumber_1.Then('Sum of two numbers is displayed', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    console.log(`The Result is displayed: ${yield calc.getResult.isDisplayed()}`);
}));
cucumber_1.Then('is equal to {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    const text = yield calc.getResult.getText();
    console.log(text);
    //assert.equal(text,string);
    expect(text).to.equal(string); // This is chai syntax.
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9uL2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QyxDQUFXLHVDQUF1QztBQUMvRiwwREFBdUQ7QUFDdkQsMkNBQXFDO0FBQ3JDLGdEQUF5QixDQUErQiw4REFBOEQ7QUFFdEgsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUMsQ0FBNEIsdURBQXVEO0FBQy9HLCtKQUErSjtBQUMvSixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDLENBQStCLG1EQUFtRDtBQUMzRyw0Q0FBNEM7QUFDNUMsZ0JBQUssQ0FBQyxvQ0FBb0MsRUFBRSxHQUFTLEVBQUU7SUFDbkQsb0VBQW9FO0lBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0FBRXBFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDdEUsb0VBQW9FO0lBQ3BFLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzVCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFckMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFTLEVBQUU7SUFDNUIsb0VBQW9FO0lBQ3BFLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlDQUFpQyxFQUFFLEdBQVMsRUFBRTtJQUMvQyxvRUFBb0U7SUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDMUMsb0VBQW9FO0lBQ3BFLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLDRCQUE0QjtJQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFVLHVCQUF1QjtBQUNuRSxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=