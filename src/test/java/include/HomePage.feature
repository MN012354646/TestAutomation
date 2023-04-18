Feature: Title of your feature
  I want to use this template for my feature file

# Labels verified with data file
  @test
  Scenario: Verify home page label
    Given member is on home page
  	Then home page label verification

# Labels verified in UI 	
  @test
  Scenario: Verifiy List of Users
    Given member is on home page
    And navigated to "home page" page successfully
    And click on "List users" link
    And "/api/users?page=2" is verified sucessfully
    And click on "Single user" link
    And "/api/users/2" is verified sucessfully
    And click on "Single user not found" link
    And "/api/users/23" is verified sucessfully
     And click on "List <resource>" link
    And "/api/unknown" is verified sucessfully
    
    #Response code not verified saparate xpath needs to create based on UI, because duplicate codes