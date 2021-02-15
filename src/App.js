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
    locations: []
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
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
          <p id="subheader">Want to level-up your dev skills?<br/><br/>Explore upcoming events in <span id="webdev-header">Web Development</span> from around the world!</p>
        </div>
        <br/><br/>
        <label id="city-label">Select your city: </label>
        <br/><br/>
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents} 
        />
        <br/>
        <NumberOfEvents/>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
