# typescript_framework

Steps to create a typescript test automation framework

## Note:

typescript and protractor were installed on global level as was recommended inspight of, the fact that they were mentioned in package.json and were installed using npm install.

###1 Scripts: 

available in package.json

```
wdm:update- This will run the command webdriver-manager update
pretest- when you give npm run test, 
         this will first transpile (tsc) the TS code into JS code and create corresponding JS files in the tmpJSFiles folder. 
protractor- is installed globally and for the node to identify it in the folder, its important to give the path of the cli.js for protractor in built folder.
```

###2 CUCUMBER
This is a BDD style test framework for designing the Automation framework.

1. Add dependencies for cucumber

```
"@types/cucumber": "^4.0.5",
    "cucumber": "^5.1.0",
    "protractor-cucumber-framework": "^6.1.1",
```

2. Changes to config.ts for cucumber

```
  The file cucumberconfig.ts was added.
```

###3 Cucumber- Feature files.
Add new folder for feature files.
Feature file is what holds the test case in the Gherkin language.
  All feature files have an extension of 
	```
	.feature
	```
Write a scenario in, Given when then format using Gherkin.
Add the location to the cucumberconfig.ts file in the specs section e.g 
```
specs: ['../featureFolder/demo.feature']
```

###4 Cucumber- Step Definitions
Add new folder for the step definitions.
  Add this to the cucumberconfig.ts file under 
```
cucumberOpts: {}
```
  Add new folder stepDefinition.
  Create a step definition file for the corresponding feature file in a particular template.
  Add the path to the cucumberconfig.ts
  Create a timeout.ts file in stepDefinition folder, protractor with cucumber can get confused when to time out in case of an error and can continue forever. (~implicit wait)
  Add the path of the step definition file in the cucumerconfig.ts under the 
```
cucumberOpts
```
  Because both files are present in stepDefinition just update the path to 
```
'./stepDefinition/*.ts' instead of './stepDefinition/demo.ts'
```
###5 Best Practices
  Design the Step definitions such that the duplication can be avoided. 


###6 Cucumber- Parametization
Use of scenario outline and examples in the feature file. 
The test data is provided from the feature file itself.

###7 Cucumber- ChaiAssertion Library
  [Chai]
  ****
  Add dev dependancies:
  ```
  @types/chai
  chai
  chai-as-promise
  ```
  Is an assertion Library. We can also use just inbuilt assert, as given in the code demo.ts in the stepDefinition folder.
  ```
  import chai from "chai";
  var expect = chai.expect;
  ```
  and then just use the assertion statement as below:
  ```
  expect(a).to.equal(b); 
  ```
###8 Cucumber- Tagging
If we want to run tests with specific tags only in that case we can use the tagging functionality available in cucumber.
in the feature file add the @tag_name_to_run above the scenario which you want to execute.
Add the tags option in the cucumberconf.ts file as below
```
cucumberOpts: {
  tags: ["@tag_name_to_run1", "@tag_name_to_run1"],
  require: ['./stepDefinition/*.js'] 
}
```

###9 Cucumber- Hooks
## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [abcwizard](http://www.abc.io/1.0.2/docs/) - The web framework used
* [xxa](https://axa.apache.org/) - Dependency Management
* [QWQ](https://QWQ.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Sushank** - *Initial work*

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
