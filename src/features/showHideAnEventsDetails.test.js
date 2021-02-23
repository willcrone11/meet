import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import Event from '../Event';
import { mount, shallow } from 'enzyme';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
const event = mockData[0]; // Mock event prop

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    
    let AppWrapper;
    given('the main page is open', () => {

    });

    when('the user scrolls through the app', () => {
      AppWrapper = mount(<App />)
    });

    then('the user should see a list of all upcoming events with their details hidden', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.EventList')).toHaveLength(1);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    
    let AppWrapper;
    given('the main page is open', async () => {
      AppWrapper = await mount(<App />);
      await AppWrapper.update();
      expect(AppWrapper.find(Event)).toHaveLength(mockData.length);
    });

    when('the user clicks on the “Show Details” button for an event', () => {
      AppWrapper.update();
      AppWrapper.find('.event .details-btn').at(1).simulate('click');
    });

    then('the user should see an expanded view of that event’s details', () => {
      AppWrapper = shallow(<Event event={event} />);
      AppWrapper.find('.details-btn').simulate('click');
      expect(AppWrapper.state('isExpanded')).toBe(true);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    
    let AppWrapper;
    given('an event has been expanded', async () => {
      AppWrapper = await mount(<App />);
      await AppWrapper.update();
      expect(AppWrapper.find(Event)).toHaveLength(mockData.length);
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
      expect(AppWrapper.find('.event .summary')).toHaveLength(2);
    });

    when('the user clicks on the “Hide Details” button for that event', () => {
      AppWrapper.find('.event .details-btn').at(1).simulate('click');
    });

    then('the details of the selected event should be hidden from the user', () => {
      AppWrapper = shallow(<Event event={event} />)
      expect(AppWrapper.state('isExpanded')).toBe(false);
    });
  });
});