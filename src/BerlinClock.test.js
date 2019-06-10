import React from 'react';
import BerlinClock from './BerlinClock';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Berlin clock', function(){

  let wrapper;
  let clock;

  it('renders without crashing', () => {
    shallow(<BerlinClock />);
  });

  it('should not accept time if it is not valid', () => {
    let time = '29:00:85';
    wrapper = shallow(<BerlinClock />);
    clock = wrapper.instance();

    expect(clock.updateClock(time)).toBe('Invalid time');
  });

  it('should update the clock every second', () => {
    wrapper = shallow(<BerlinClock />);
    clock = wrapper.instance();


    expect(clock.state('timeout')).toBeFalsy();
    
    clock.instance().updateClock()

    setTimeout(()=>{
      expect(clock.state('timeout')).toBeTruthy();
      done()
    }, 1001)
  });

});