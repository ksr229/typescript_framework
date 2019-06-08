#   This is written in Gherkin language. BDD style scenario.
Feature: Test Add functionality of Calculator App

    Scenario: Add two numbers and verify the result
        Given Navigate to the calculator website
        When Enter two numbers '3' and '5'
        And click on Go.
        Then Sum of two numbers is displayed
        And is equal to '8'

    #   Because Scenario 2 has the same structure there is no need to write a separate step definition for the same and cucumber is smart enought to pick it up automatically
    Scenario: Add two numbers and verify the result
        Given Navigate to the calculator website
        When Enter two numbers '4' and '5'
        And click on Go.
        Then Sum of two numbers is displayed
        And is equal to '9'

    #   Using parametization with the help of scenario outline and examples, no need to use a new step definition
    #   The firstNum and the secondNum have been parametized.
    @paramExample
    Scenario Outline: Add two numbers and verify the result
        Given Navigate to the calculator website
        When Enter two numbers '<firstNum>' and '<secondNum>'        
        And click on Go.
        Then Sum of two numbers is displayed
        And is equal to '<result>'

        Examples:
            | firstNum | secondNum | result |
            | 1        | 2         | 3      |
            | 2        | 3         | 5      |
