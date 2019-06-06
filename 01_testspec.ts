
import { browser, element, by } from 'protractor';

describe('Find and enter first number', () => {

    it('Open Test Website', () => {

        console.log("Starting the test");
        browser.manage().window().maximize();
        browser.get('https://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        element(by.model("first")).sendKeys('3').then(function () {
            console.log("First Number is found and value was entered.");
            element(by.model("second")).sendKeys('5').then(function () {
                console.log("Second Number is found and value was entered.")
                browser.sleep(2000);
                element(by.id("gobutton")).click().then(function () {
                    // element(by.css('tr[ng-repeat="result in memory"]>td:nth-child(3)')).getText().then(function(text){
                    //     console.log("This value is read using locator type: css---->" + text);  // This and the one below work exactly the same.
                    // });
                    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {
                        console.log("This value is read using locatory type: repeater---->" + text);
                    });
                });
            });
        });
        browser.close();
    });
});
