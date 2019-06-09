//The first two commands are required to add to the config file to adapt them for the typescript
import { Config } from 'protractor';

export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,   // Direct connect lets you connect to the browser directly

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['04_agl_authenticated.js'], // Change this to extention js as its going to be converted to a conf.js with the same name that is given here.

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};