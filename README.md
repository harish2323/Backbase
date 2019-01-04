Backbase Automation

Prerequisites :

The following are required to run the tests :
1) Maven
2) Jdk 1.8
3) Junit
4) Chrome browser
5) Firefox browser
6) Cucumber

Framework :
The framework uses cucumber for BDD scenarios and java(selenium) to define the steps. The tests can be run in firefox or chrome.

Features :
The scenario features are written in cucumber. the feature files are stored in the /src/test/features folder. 

Step Defintions:
The step definition code for the feature steps are stored in the /src/test/StepDefinition folder.

Test Data :
The test data has been provided to the scenarios through the example tables in the feature files. The test data table can be tagged to be used
for different environments.

Execution :

To run individual tests use the particular test tag :
./Backbase/mvn test -Dcucumber.options="--tags @CREATE_001" -DBROWSER="chrome" -P dev

This will run the create computer scenario from the CreateComputer.feature file
The test will be run in chrome. and the url will be used from the "dev" profile from pom file. the url from "dev" will be loaded. there is also a "qa" profile. Currently only dev has a valid url.

To run a whole feature in firefox:
mvn test -Dcucumber.options="--tags @DeleteComputer" -DBROWSER="firefox" -P dev

run all the tests :
mvn test -DBROWSER="chrome" -P dev

Results : The html results will be stored in reports folder. Screenshots would be embedded for failed tests.
