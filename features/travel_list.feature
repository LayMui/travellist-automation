Feature: Travel list

  In order to go travelling with my backpack
  As a Backpacker
  I'd like to prepare a list of travel items

  Background:
    Given Alice is in the faraway land

  Scenario Outline: Add items she need for the trip

    When she add the quantity "<quantity>" of "<item>" for her travel
    Then she should see "<quantity>" of the items "<item>" added

    Examples:
      | quantity | item     | 
      |   2      | plus02   | 
    
