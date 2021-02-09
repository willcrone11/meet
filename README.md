# Meet Application

The objective of this project is to build a serverless, progressive web application with React using a test-driven development technique. The application uses the Google Calendar API to fetch upcoming events. Users will be able to filter events by city, show/hide event details, specify the number of events shown, use the app offline, add an app shortcut to the home screen, and view a chart showing the number of upcoming events by city. 
<br/>
<b>Feature 1: Filter events by city</b>
<br/>
As a user, I should be able to filter events by city so that I can see a list of events that take place in that particular city.
<br/>
<br/>
<b>Feature 2: Show/hide an event’s details</b>
<br/>
As a user, I should be able to show or hide event details so that I can see more or less information about an event. 
<br/>
<br/>
<b>Feature 3: Specify number of events</b>
<br/>
As a user, I should be able to specify the number of events I want to see at one time so that I can see more or less events in the events list at one time. 
<br/>
<br/>
<b>Feature 4: Use the app offline</b>
<br/>
As a user, I should be able to use the app while offline and be able see the events I viewed the last time I was online. 
<br/>
<br/>
<b>Feature 5: Data visualization</b>
<br/>
As a user, I should be able to see a chart showing the upcoming events in each city so that I know which cities have upcoming events. 
<br/>
<br/>
<b>Feature 6: Add an app shortcut to the home screen</b>
<br/>
As a user, I should be able to add an app shortcut to my home screen so that I can access the app faster and more conveniently. 
<br/>
<br/>
# Test Scenarios
<br/>
<b>Feature 1: Filter events by city</b>
<br/>
<br/>
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
<br/>
Given user hasn’t searched for a city
<br/>
When the user opens the app
<br/>
Then the user should see a list of all upcoming events
<br/>
<br/>
Scenario 2: User should see a list of suggestions when they search for a city
<br/>
Given the user is on the main page
<br/>
When the user starts typing in the searchbar to search for a city
<br/>
Then the results the user sees should be a list of cities based on what the user has typed
<br/>
<br/>
Scenario 3: User can select a city from the suggested list
<br/>
Given the user was typing “Cleveland” in the city textbox and a list of suggested cities is displayed
<br/>
When the user selects a city from the list (e.g., “Cleveland, OH”)
<br/>
Then their city should be changed to the selected city and the user should be able to see a list of upcoming events in that city 
<br/>
<br/>
<b>Feature 2: Show/hide an event’s details</b>
<br/>
<br/>
Scenario 1: An event element is collapsed by default 
<br/>
Given the main page is open
<br/>
When the user scrolls through the app
<br/>
Then the user should see a list of all upcoming events with their details hidden
<br/>
<br/>
Scenario 2: User can expand an event to see its details
<br/>
Given the main page is open
<br/>
When the user clicks on the “Show Details” button for an event
<br/>
Then the user should see an expanded view of that event’s details
<br/>
<br/>
Scenario 3: User can collapse an event to hide its details
<br/>
Given an event has been expanded
<br/>
When the user clicks on the “Hide Details” button for that event 
<br/>
Then the details of the selected event should be hidden from the user
<br/>
<br/>
<b>Feature 3: Specify number of events</b>
<br/>
<br/>
Scenario 1: When user hasn’t specified a number, 32 is the default number 
<br/>
Given the main page is open and the user hasn’t specified a number in the “Number of Events” field
<br/>
When the user scrolls through the app
<br/>
Then the user should see 32 events displayed on the main page
<br/>
<br/>
Scenario 2: User can change the number of events they want to see
<br/>
Given the main page is open
<br/>
When the user types in a specific number of events in the “Number of Events” field
<br/>
Then the user should see that specific number of events displayed on the main page 
<br/>
<br/>
<b>Feature 4: Use the app when offline</b>
<br/>
<br/>
Scenario 1: Show cached data when there’s no internet connection
<br/>
Given the user does not have any internet connection
<br/>
When the user opens the app
<br/>
Then the user should see the events they viewed the last time they were online
<br/>
<br/>
Scenario 2: Show error when user changes the settings 
<br/>
Given the user is in an area without internet connection
<br/>
When the user changes the city in the city box
<br/>
Then the user should see an error instead of the app loading new data
<br/>
<br/>
<b>Feature 5: Data Visualization</b>
<br/>
<br/>
Scenario 1: Show a chart with the number of upcoming events in each city
<br/>
Given the user is on the main page
<br/>
When the user scrolls, regardless of city filters,
<br/>
Then the user should see a chart showing the number of upcoming events in each city 
<br/>
<br/>
