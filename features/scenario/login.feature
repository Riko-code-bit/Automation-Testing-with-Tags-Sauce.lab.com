
Feature: Login Page

  @positive
  Scenario: As a user, I can log into the secure area
    Given Im on login Page
    When Im trying to login with correct user
    Then Im succesfully logged in and in product Page

  @negative
  Scenario: Testing login with incorrect acc
    Given Im on login Page
    When Im trying to login with incorrect user
    Then Im locked in login page

  @shopping
  Scenario: Testing adding Item to cart
    Given Im on login Page
    When Im trying to login with correct user
    Then Im succesfully logged in and in product Page
    When Im adding item to cart:
      | productName           | Quantity |
      | Sauce Labs Bike Light | 1        |
      | Sauce Labs Backpack   | 1        |
    Then Im checking and assertion if Im successfuly added item to cart:
      | productName           | Quantity |
      | Sauce Labs Bike Light | 1        |
      | Sauce Labs Backpack   | 1        |

