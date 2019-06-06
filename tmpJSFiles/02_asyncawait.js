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
describe('Find and enter first number', () => {
    it('Open Test Website', () => __awaiter(this, void 0, void 0, function* () {
        console.log("Starting the test");
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.model("first")).sendKeys('3').then(function () {
            console.log("First Number is found and value was entered.");
            protractor_1.element(protractor_1.by.model("second")).sendKeys('5').then(function () {
                console.log("Second Number is found and value was entered.");
                protractor_1.browser.sleep(2000);
                protractor_1.element(protractor_1.by.id("gobutton")).click().then(function () {
                    // element(by.css('tr[ng-repeat="result in memory"]>td:nth-child(3)')).getText().then(function(text){
                    //     console.log("This value is read using locator type: css---->" + text);  // This and the one below work exactly the same.
                    // });
                    protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (text) {
                        console.log("This value is read using locatory type: repeater---->" + text);
                    });
                });
            });
        });
    }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDJfYXN5bmNhd2FpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLzAyX2FzeW5jYXdhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLDJDQUFxRDtBQUtyRCxRQUFRLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO0lBRXpDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFTLEVBQUU7UUFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDaEUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1lBQzVELG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQTtnQkFDNUQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDcEMscUdBQXFHO29CQUNyRywrSEFBK0g7b0JBQy9ILE1BQU07b0JBQ04sb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTt3QkFDckcsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1REFBdUQsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDaEYsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILDBDQUEwQztJQUMxQyxnREFBZ0Q7SUFDaEQsd0NBQXdDO0lBQ3hDLDZDQUE2QztJQUM3QyxzQ0FBc0M7SUFDdEMsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsb0VBQW9FO0lBQ3BFLDJCQUEyQjtJQUczQixVQUFVO0FBQ1YsQ0FBQyxDQUFDLENBQUMifQ==