"use strict";
//The first two commands are required to add to the config file to adapt them for the typescript
//adding new changes to implement the cucumber framework.
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // below two lines are added as a part of CUCUMBER framework adaptation.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../featureFolder/demo.feature'],
    cucumberOpts: {
        //require step definitions
        require: [
            './stepDefinition/*.js' // The * will check for all the files in the stepDefinition folder, after transpiling the end file has an extension .js hence we are giving .js extension here aswell.
        ]
    }
    // // Options to be passed to Jasmine-node. // We dont need this as we will be using cucumber.
    // jasmineNodeOpts: {
    //     showColors: true, // Use colors in the command line report.
    // }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXJjb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnR0FBZ0c7QUFDaEcseURBQXlEOztBQUk5QyxRQUFBLE1BQU0sR0FBVztJQUN4Qiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELGFBQWEsRUFBRSxJQUFJO0lBQ25CLHdFQUF3RTtJQUN4RSxTQUFTLEVBQUUsUUFBUTtJQUNuQiwyQ0FBMkM7SUFDM0MsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO0tBQ3hCO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsK0JBQStCLENBQUM7SUFDeEMsWUFBWSxFQUFFO1FBQ1YsMEJBQTBCO1FBQzFCLE9BQU8sRUFBRTtZQUNMLHVCQUF1QixDQUFFLHNLQUFzSztTQUNsTTtLQUNKO0lBQ0QsOEZBQThGO0lBQzlGLHFCQUFxQjtJQUNyQixrRUFBa0U7SUFDbEUsSUFBSTtDQUNQLENBQUMifQ==