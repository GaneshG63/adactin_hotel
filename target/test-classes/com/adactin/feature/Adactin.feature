Feature: Adctin hotel booking page

@smoketest
Scenario: Login Page
Given User Launch The Application
When User Enter the UserName In UserName Field
And User Enter the Password In Password Field
Then User Click On The Login button and it navigates to the Search Hotel Page

@sanitytest
Scenario: Search Hotel Page
Given User Select the Location
And User Select the Hotels
And User Select the Room Type
And User Select the Number of Rooms
And User Enter the  Checkin Date
And User Enter the Checkout Date
And User Selects the adults per Room
And User Selects the childrens Per Room
Then User Click on the search button And it Navigates the Select Hotel Page

@sanitytest
Scenario: Select Hotel Page
When User Click the Radio Button to Select  Hotel
Then User Click the Continue Button And it Navigates To The Book Hotel Page

@sanitytest
Scenario: Book A Hotel

When User Enter the Firstname in Firstname field
And User Enter the Lastname in LastName field
And User Enter the Credit Card No in Creit Card No field
And User Credit Card Card Type
And User Select the Expiry Month
And User Select the Expiry Year
And User Enter the Cvv Number
Then User Click onn the BookNow Button and it Navigates the Booking Confirmation Page

@regressiontest
Scenario: Booking Confirmation Page

Then User Click on the MyItinerary Button for Cancel the Selection Hotel
And user Click the Logout Button for Exit the Page 

 
														




