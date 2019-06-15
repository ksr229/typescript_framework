"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'jasmine',
    allScriptsTimeout: 60000,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'allow-insecure-localhost',
                'disable-gpu',
                'no-sandbox',
                'disable-web-security',
                'verbose',
                'log-path=chromedriver.log',
            ]
        }
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['06_agl_final.js'],
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
    }
};
if (process.env.npm_config_argv.includes('--headless')) {
    exports.config.capabilities.chromeOptions.args.push('headless');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHVyxRQUFBLE1BQU0sR0FBVztJQUN4Qiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLGlCQUFpQixFQUFFLEtBQUs7SUFFeEIsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGFBQWEsRUFBRTtZQUNYLElBQUksRUFBRTtnQkFDRiwwQkFBMEI7Z0JBQzFCLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixzQkFBc0I7Z0JBQ3RCLFNBQVM7Z0JBQ1QsMkJBQTJCO2FBQzlCO1NBQ0o7S0FFSjtJQUVELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLGlCQUFpQixDQUFDO0lBRTFCLHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtLQUNuQjtDQUNKLENBQUM7QUFFRixJQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtJQUNuRCxjQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0NBQzFEIn0=