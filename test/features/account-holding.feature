Feature: test account holding api

  Scenario Outline: Test account holding API
    Given the application is running at "http://localhost:3000"
    When I make a GET request to "/accounts" and "<account_cd>"

    Then the response status code is "200"
    And the holding result should match with file "<expected_file>"
    Examples:
      | account_cd | expected_file                 |
      | 100-100001 | test_data/out-100-100001.json |
      | 100-102001 | test_data/out-100-102001.json |
      | 200-202001 | test_data/out-200-202001.json |
