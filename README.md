# typescript_framework
Steps to create a typescript test automation framework

Note:
typescript and protractor were installed on global level as was recommended inspight of,
the fact that they were mentioned in package.json and were installed using npm install


Scripts:  available in package.json
********
wdm:update- This will run the command webdriver-manager update
pretest- when you give npm run test, 
         this will first transpile (tsc) the TS code into JS code and create corresponding JS files in the tmpJSFiles folder. 
protractor- is installed globally and for the node to identify it in the folder, its important to give the path of the cli.js for protractor in built folder.