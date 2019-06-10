import React from 'react';
import Seconds from './Seconds';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

function setup(props){
    let enzymeWrapper = shallow(<Seconds {...props}/>);
    return enzymeWrapper.instance();
}

describe('Berlin Clock', function(){

    let seconds;

    describe('Seconds row', function(){

        it('at 00:00:00 should have all the lamps to be Y', () => {
            let time = '00:00:00';
            const [h, m, s] = time.split(":");
            const props = {
                seconds: s
            }
            
            seconds = setup(props);
            
            expect(seconds.seconds()).toBe('Y');
        });

        it('at 23:59:59 should have all the lamps to be O', () => {
            let time = '23:59:59';
            const [h, m, s] = time.split(":");
            const props = {
                seconds: s
            }
            
            seconds = setup(props);
            
            expect(seconds.seconds()).toBe('O');
        });

    });

});