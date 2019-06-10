import React from 'react';
import moment from 'moment';
import constants from './utils/constants';
import { isValidTime } from './utils/clockUtils';
import Minutes from './components/Minutes/Minutes';
import Hours from './components/Hours/Hours';
import Seconds from './components/Seconds/Seconds';

class BerlinClock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: "00",
      minutes: "00",
      seconds: "00"
    }
    this.seconds = React.createRef();
    this.minutes = React.createRef();
    this.hours = React.createRef();
  }

  updateClock(time){
    if(!isValidTime(time))
        return constants.INVALID_MESSAGE;
    const [hours, minutes, seconds] = time ? time.split(':') : moment().format('H:m:s').split(':');
    this.setTime(hours, minutes, seconds);
  }

  setTime(hours, minutes, seconds) {
    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.updateClock(moment().format("HH:mm:ss")), constants.ONE_SECOND);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  convertDigitalToBerlinTime(){
    return this.seconds.current.seconds() + this.minutes.current.topMinutes() + this.minutes.current.bottomMinutes() +
      this.hours.current.topHours() + this.hours.current.bottomHours();
  }

  render() {
    return (
      <div id="berlinClock">
        <Seconds ref={this.seconds} seconds = {this.state.seconds}/>
        <Hours ref={this.hours} hours = {this.state.hours}/>
        <Minutes ref={this.minutes} minutes = {this.state.minutes}/>
      </div>
    );
  }

}

export default BerlinClock;