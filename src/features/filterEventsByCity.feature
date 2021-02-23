Feature: Filter events by city

Scenario: When user hasn’t searched for a city, show upcoming events from all cities
Given user hasn’t searched for a city
When the user opens the app
Then the user should see a list of all upcoming events

Scenario: User should see a list of suggestions when they search for a city
Given the user is on the main page
When the user starts typing in the search bar to search for a city
Then the results the user sees should be a list of cities based on what the user has typed

Scenario: User can select a city from the suggested list
Given the user was typing “Berlin” in the city textbox and a list of suggested cities is displayed
When the user selects a city from the list (e.g., “Berlin”)
Then their city should be changed to the selected city and the user should be able to see a list of upcoming events in that city 
