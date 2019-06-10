import React from 'react';
import Seconds from './Seconds';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

function setup(time){
    const [h, m, s] = time.split(":");
    const props = {
        seconds: s
    }
    let enzymeWrapper = shallow(<Seconds {...props}/>);
    return enzymeWrapper.instance();
}

describe('Berlin Clock', function(){

    let seconds;
    let time;

    describe('Seconds row', function(){

        it('at 00:00:00 should have all the lamps to be Y', () => {
            time = '00:00:00';
            
            seconds = setup(time);
            
            expect(seconds.seconds()).toBe('Y');
        });

        it('at 23:59:59 should have all the lamps to be O', () => {
            time = '23:59:59';
            
            seconds = setup(time);
            
            expect(seconds.seconds()).toBe('O');
        });

    });

});