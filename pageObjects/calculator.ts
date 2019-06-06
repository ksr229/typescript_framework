import { ElementFinder, element, by, $ } from "protractor";

export class calculator {                       //always use export to import the class and use the properties or functions defined inside the class.
    firstNum: ElementFinder;
    secondNum: ElementFinder;                   // When you define a variable then its return type is a must in Typescript
    goBtn: ElementFinder;
    getResult: ElementFinder;

    constructor() {

        this.firstNum = element(by.model("first"));
        this.secondNum = element(by.model("second"));
        this.goBtn = $('#gobutton');
        this.getResult = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"))
    }
}