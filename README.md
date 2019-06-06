# typescript_framework
Steps to create a typescript test automation framework

#Note:
typescript and protractor were installed on global level as was recommended inspight of,
the fact that they were mentioned in package.json and were installed using npm install


#Scripts:  available in package.json
#********
wdm:update- This will run the command webdriver-manager update
pretest- when you give npm run test, 
         this will first transpile (tsc) the TS code into JS code and create corresponding JS files in the tmpJSFiles folder. 
protractor- is installed globally and for the node to identify it in the folder, its important to give the path of the cli.js for protractor in built folder.

#CUCUMBER
#1. Added dependencies for cucumber
  "@types/cucumber": "^4.0.5",
    "cucumber": "^5.1.0",
    "protractor-cucumber-framework": "^6.1.1",
#2. Changes to config.ts for cucumber
  The file cucumberconfig.ts was added.
#3. Add new folder for feature files.
  Feature file is what holds the test case in the Gherkin language.
  All feature files have an extension of .feature
  Write a scenario is Given when then format using Gherkin.
#4. Step Definitions
  Add this to the cucumberconfig.ts file under cucumberOpts: {}
  Add new folder stepDefinition.
  Create a step definition file for the corresponding feature file in a particular template.
  Add the path to the cucumberconfig.ts
  Create a timeout.ts file in stepDefinition folder, protractor with cucumber can get confused when to time out and can continue forever. (~implicit wait)
  Because both files are present in stepDefinition just update the path to './stepDefinition/*.ts' instead of './stepDefinition/demo.ts'
  