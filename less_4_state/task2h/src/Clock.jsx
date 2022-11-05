import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

/*******************************************************/
//test data
// console.log('function1 curent:', getTimeWithOffset(0));
// console.log('function2 :', getTimeWithOffset(-2));
// console.log('function3 :', getTimeWithOffset(+2));
// //put your code here

// const formatDate2 = date => moment(date).format('LTS');

// const res2 = formatDate2(getTimeWithOffset(0));
// console.log('res :', res2);
/*******************************************************/

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location,
    };

    //Do not do this way
    setInterval(() => {
      this.setState({
        time: moment(getTimeWithOffset(props.offset)).format('LTS'),
      });
    }, 1000);
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

//console.log('LTS :', moment().format('LTS'));
