import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import { getEvents, extractLocations } from './api';
import "./nprogress.css";
import { ErrorAlert } from './Alert';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(',').shift()
      return {city, number};
    })
    return data;
  };

  ifOnline = () => {
    if (!navigator.onLine) {
      this.setState({
        infoText: 'You are currently offline- events may not be up to date'
      })
    } else {
      return this.setState({
        infoText: '',
      })
    }
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
    this.ifOnline();
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <div id="header-container">
          <h1 id="header"><span id="devel">devel_</span><span id="up">Up</span><span id="plus">+</span></h1>
          <p className="error-alert-offline" ><ErrorAlert text={this.state.infoText} /></p>
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
        <br></br><br/>
        <div className="data-vis-wrapper">
        <p className="chart-label">Frequency of Event by Type:</p>
          <EventGenre 
            events={this.state.events}
            locations={this.state.locations}
          />
          <p className="chart-label">Number of Events per City:</p>
          <ResponsiveContainer height={400} >
            <ScatterChart
              margin={{
                top: 5, right: 5, bottom: 5, left: 0,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
            </ResponsiveContainer>
          </div>
        <br/><br/>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;
