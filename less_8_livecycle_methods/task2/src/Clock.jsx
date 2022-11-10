import React, { Component } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: moment(getTimeWithOffset(props.offset)).format('LTS'),
      location: props.location,
      offset: props.offset,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: moment(getTimeWithOffset(this.state.offset)).format('LTS'),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;
