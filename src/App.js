import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import "./nprogress.css";

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: '24',
    currentLocation: "all"
  }

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === "all"
            ? events
            : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: filteredEvents,
          currentLocation: location,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents =
          currentLocation === "all"
            ? events
            : events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          numberOfEvents: eventCount,
        });
      });
    }
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <div id="header-container">
          <h1 id="header"><span id="devel">devel_</span><span id="up">Up</span><span id="plus">+</span></h1>
        </div>
        <br></br><br></br>
          <p id="subheader">Want to level-up your dev skills?<br/><br/>Explore upcoming events in <span id="webdev-header">Web Development</span> from around the world!</p>
        <br/><br/>
        <label id="city-label">Select your city: 
          <br/><br/><br/>
          <CitySearch 
            locations={this.state.locations} 
            updateEvents={this.updateEvents} 
          />
        </label>
        <br/><br/>
        <NumberOfEvents 
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <br></br>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
