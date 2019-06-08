//The first two commands are required to add to the config file to adapt them for the typescript
//adding new changes to implement the cucumber framework.

import { Config } from 'protractor';

export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,   // Direct connect lets you connect to the browser directly
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
    specs: ['../featureFolder/demo.feature'], // This will have a feature file in case of cucumber framework.
    cucumberOpts: {
        //tag names which you want to execute
        tags: "@paramExample",
        //require step definitions
        require: [
            './stepDefinition/*.js'  // The * will check for all the files in the stepDefinition folder, after transpiling the end file has an extension .js hence we are giving .js extension here aswell.
        ]
    }
    // // Options to be passed to Jasmine-node. // We dont need this as we will be using cucumber.
    // jasmineNodeOpts: {
    //     showColors: true, // Use colors in the command line report.
    // }
};