import React from 'react';
import constants from './utils/constants';
import { isValidTime } from './utils/clockUtils';
import Minutes from './components/Minutes/Minutes';

class BerlinClock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: "00",
      minutes: "00",
      seconds: "00"
    }
  }

  updateClock(time){
    if(!isValidTime(time))
        return constants.INVALID_MESSAGE;
    const [hours, minutes, seconds] = time.split(':');
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
    this.intervalId = setInterval(() => this.updateClock(), constants.ONE_SECOND);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="berlinClock">
        <Minutes minutes = {this.state.minutes}/>
      </div>
    );
  }

}

export default BerlinClock;