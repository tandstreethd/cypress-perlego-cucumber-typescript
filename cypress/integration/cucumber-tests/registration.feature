@Registration
Feature: Registration
As a user,
I want to be able to register for an account,
so that I can create and manage my profile.

  Background:
    Given the user navigates to the app

    @RegistrationEmailHappy 
    Scenario: The user registers an account via email
    When the user registers an account
    And the user signs in by submitting "valid" credentials
    Then the user is logged into the app