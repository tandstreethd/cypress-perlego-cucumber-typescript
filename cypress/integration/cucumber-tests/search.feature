Feature: Search
 As a user of the app,
I want to be able to search for learning resources,
so that I can easily locate and view the details of a resource.

  Background:
    Given the user signs in by submitting "valid" credentials


  @SearchFiltersHappy
  Scenario Outline:: Validate basic filter combinations return at least 5 pages of results.
    When the user searches for "<Search>"
    And the user randomly selects a main filter
    And the user randomly selects a sub filter
    Then the user should see at least 5 pages of search results

    Examples:
      | Search  |
      | Science |
      | Educate |
