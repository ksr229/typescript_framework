
import { browser, element, by, $ } from 'protractor';
import { ExpectedConditions as EC } from 'protractor';
import * as request from "request-promise-native";


describe('Find and enter first number', () => {

    it('Open Test Website', async () => {

        console.log("Starting the test");
        await browser.manage().window().maximize();
        await browser.get('https://juliemr.github.io/protractor-demo/');
        await browser.sleep(2000);
        await element(by.model("first")).sendKeys('3').then(function () {
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
    });
