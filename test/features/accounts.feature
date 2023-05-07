Feature: test account api

  Scenario: Test health check API
    Given the application is running at "http://localhost:3000"
    When I make a GET request to "/accounts"
    Then the response status code is "200"
    And the response should match the content of "test_data/all-accounts.json"
