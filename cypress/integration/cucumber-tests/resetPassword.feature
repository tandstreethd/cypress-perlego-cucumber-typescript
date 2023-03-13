@ResetPassword
Feature: Reset Password
As a user
I want to be able to reset my password,
so that I can log in with a new password if I forget or need to change my existing one.


  Background:
    Given the user navigates to the password reset page

    @ResetPasswordEmailHappy
    Scenario: The user resets there account password via email
    When the user submits a valid email in forgot password form
    And the user submits valid password reset code 
    And the user submits a new password
    And the user signs in by submitting "newPassword" credentials
    Then the user is logged into the app
  
  
  