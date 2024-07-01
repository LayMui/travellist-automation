Feature: Travel list

  In order to go travelling with my backpack
  As a Backpacker
  I'd like to prepare a list of travel items

  Background:
    Given Alice is in the faraway land

  Scenario Outline: Add items she need for the trip

    When she add the quantity "<quantity>" of elemente "<skincare>" for her daily facial care
    Then she should see the items added

    Examples:
      | quantity | skincare | 
      |   2      | plus02   | 
    
