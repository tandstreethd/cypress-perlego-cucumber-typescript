@Workspace
Feature: Workspace
    As a user
    I want to create a workspace
    So that I can organise my learning resources

    Background:
        Given the user signs in by submitting "valid" credentials

    @CreateWorkSpaceHappy
    Scenario: The user creates a workspace
        And the user creates a workspace with tha name "My workspace"
        Then the created workspace with "My workspace" is displayed