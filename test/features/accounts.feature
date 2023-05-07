Feature: test account api

  Scenario: Test account  API
    Given the application is running at "http://localhost:3000"
    When I make a GET request to "/accounts"
    Then the response status code is "200"
    And the response should match the content of "test_data/all-accounts.json"

  Scenario Outline: Test account holding API
    Given the application is running at "http://localhost:3000"
    When I make a GET request to "/accounts" and "<account_cd>"

    Then the response status code is "200"
    And the holding result should match with file "<expected_file>"
    Examples:
      | account_cd | expected_file                 |
      | 100-100001 | test_data/out_100-100001.json |

