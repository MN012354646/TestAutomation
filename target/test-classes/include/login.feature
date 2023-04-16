Feature: Title of your feature
  I want to use this template for my feature file

  @test
  Scenario: Verify home page label
    Given member is on home page
  	Then home page label verification

  @test
  Scenario Outline: Registration flow
    Given member is on home page
    And navigated to "home page" page successfully
    And click on "Sign in securely" button
    And click on "Create your Amazon account" button
    And enter "<Name>" into "customer_name" textbox
    And enter "<PhoneNo>" into "phone_number" textbox
    #And navigated to "home page" page successfully
#	  And click on "Sign in securely" button
#	  And click on "Create your Amazon account" button 
    #And click on "Create a free business account" link
    #
    Examples:
	    |Name|PhoneNo   |
	    |xyz |9866754432|