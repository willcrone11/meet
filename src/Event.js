import React, { Component } from "react";
import moment from 'moment';

class Event extends Component {
  
  state = {
    isExpanded: false, // Event is collapsed by default
  };

  // Toggle expand/collapse event on click
  handleExpandEvent = () => {
    if (this.state.isExpanded === false) {
      this.setState({
        isExpanded: true,
      });
    } else {
      this.setState({
        isExpanded: false,
      });
    }
  };

  // The elements displayed when event is expanded
  renderExpandedComponent = () => {
    const { event } = this.props;

    if (this.state.isExpanded) {
      return (
        <div className='Expanded-Event'>
          <h4>About event:</h4>
          <div className='link-container'>
            <a
              className='link'
              href={event.htmlLink}
              rel='noreferrer'
              target='_blank'
            >
              See details on Google Calendar
            </a>
          </div>
          <p className='description'>{event.description}</p>
        </div>
      );
    }
  };

  // Toggles button text
  renderButtonText = () => {
    return !this.state.isExpanded ? 'Show details' : 'Hide details';
  };

  // Formats time for readability
  formatTime = () => {
    const time = this.props.event.start.dateTime;
    const formattedTime = moment(time).format("dddd, MMMM Do YYYY, h:mm a");
    return <span className='start-dateTime'>{`${formattedTime}`}</span>
  };


  render() {
    const { event } = this.props;
    
    return (
      <div className='event' onClick={this.handleExpandEvent}>
        <div className='heading'>
          <h2 className='summary'>{event.summary}</h2>
        </div>
        <div className='time'>{this.formatTime()}</div>
        <div className='location-container'>
          <span className='location'>{event.location}</span>
        </div>
        <div>{this.renderExpandedComponent()}</div>
        <br/>
        <button 
        type='button' 
        className='details-btn'
        onClick={this.handleExpandEvent}
        >
          {this.renderButtonText()}
        </button>
      </div>
    );
  }
}

export default Event;