"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Find and enter first number', function () {
    it('Open Test Website', function () {
        console.log("Starting the test");
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
        protractor_1.browser.sleep(2000);
        protractor_1.element(protractor_1.by.model("first")).sendKeys('3').then(function () {
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
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRDtBQUVsRCxRQUFRLENBQUMsNkJBQTZCLEVBQUU7SUFFcEMsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDMUQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7WUFDNUQsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFBO2dCQUM1RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUNwQyxxR0FBcUc7b0JBQ3JHLCtIQUErSDtvQkFDL0gsTUFBTTtvQkFDTixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO3dCQUNyRyxPQUFPLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUNoRixDQUFDLENBQUMsQ0FBQztnQkFFUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=