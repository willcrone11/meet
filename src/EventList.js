import React, { Component } from 'react';
import Event from './Event';
import { getEvents, extractLocations } from './api';

class EventList extends Component {

  state = {
    events: [],
    locations: [],
  }

  async componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
    this.ifOnline();
  }

  render() {
    
    const { events } = this.props;
    
    return (
      <ul className="EventList">
        {events.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;