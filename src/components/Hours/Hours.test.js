import React from 'react';
import Hours from './Hours';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

function setup(props){
    let enzymeWrapper = shallow(<Hours {...props}/>);
    return enzymeWrapper.instance();
}

describe('Berlin Clock', function(){

    let hours;

    describe('Single minutes row', function(){

        it('at 00:00:00 should have all the lamps to be OOOO', () => {
            let time = '00:00:00';
            const [h, m, s] = time.split(":");
            const props = {
                hours: m
            }
            
            hours = setup(props);
            
            expect(hours.bottomHours()).toBe('OOOO');
        });

    });

});