import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch';
import { extractLocations } from '../api';


const feature = loadFeature('./src/features/filterEventsByCity.feature');
const locations = extractLocations(mockData);

defineFeature(feature, test => {
  test('When user hasn’t searched for a city, show upcoming events from all cities', ({ given, when, then }) => {
    given('user hasn’t searched for a city', () => {

    });

    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see a list of all upcoming events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });

  test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
    
    let CitySearchWrapper;
    given('the user is on the main page', () => {
      CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />);
    });

    when('the user starts typing in the search bar to search for a city', () => {
      CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
    });

    then('the results the user sees should be a list of cities based on what the user has typed', () => {
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    });
  });

  test('User can select a city from the suggested list', ({ given, when, then }) => {
    
    let AppWrapper;
    given('the user was typing “Berlin” in the city textbox and a list of suggested cities is displayed', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
    });

    when('the user selects a city from the list (e.g., “Berlin”)', () => {
      AppWrapper.find('.suggestions li').at(0).simulate('click');
    });

    then('their city should be changed to the selected city and the user should be able to see a list of upcoming events in that city', () => {
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
    });
  });

});