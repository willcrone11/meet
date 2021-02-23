Feature: Show/Hide an events details

Scenario: An event element is collapsed by default 
Given the main page is open
When the user scrolls through the app
Then the user should see a list of all upcoming events with their details hidden

Scenario: User can expand an event to see its details
Given the main page is open
When the user clicks on the “Show Details” button for an event
Then the user should see an expanded view of that event’s details

Scenario: User can collapse an event to hide its details
Given an event has been expanded
When the user clicks on the “Hide Details” button for that event 
Then the details of the selected event should be hidden from the user
