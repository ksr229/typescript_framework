#This is written in Gherkin language. BDD style scenario.
Feature: Test Add functionality of Calculator App

    Scenario: Add two numbers and verify the result
        Given Navigate to the calculator website
        When Enter two numbers '3' and '5'
        And click on Go.
        Then Sum of two numbers is displayed
        And is equal to '8'

    Scenario: Add two numbers and verify the result
        Given Navigate to the calculator website
        When Enter two numbers '4' and '5'
        And click on Go.
        Then Sum of two numbers is displayed
        And is equal to '9'