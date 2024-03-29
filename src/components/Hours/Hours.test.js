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

    describe('Single hours row', function(){

        it('at 00:00:00 should have all the lamps to be OOOO', () => {
            let time = '00:00:00';
            const [h, m, s] = time.split(":");
            const props = {
                hours: h
            }
            
            hours = setup(props);
            
            expect(hours.bottomHours()).toBe('OOOO');
        });

        it('at 23:59:59 should have all the lamps to be RRRO', () => {
            let time = '23:59:59';
            const [h, m, s] = time.split(":");
            const props = {
                hours: h
            }
            
            hours = setup(props);
            
            expect(hours.bottomHours()).toBe('RRRO');
        });

        it('at 02:04:00 should have all the lamps to be RROO', () => {
            let time = '02:04:00';
            const [h, m, s] = time.split(":");
            const props = {
                hours: h
            }
            
            hours = setup(props);
            
            expect(hours.bottomHours()).toBe('RROO');
        });

        it('at 08:23:00 should have all the lamps to be RRRO', () => {
            let time = '08:23:00';
            const [h, m, s] = time.split(":");
            const props = {
                hours: h
            }
            
            hours = setup(props);
            
            expect(hours.bottomHours()).toBe('RRRO');
        });

        it('at 14:35:00 should have all the lamps to be RRRR', () => {
            let time = '14:35:00';
            const [h, m, s] = time.split(":");
            const props = {
                hours: h
            }
            
            hours = setup(props);
            
            expect(hours.bottomHours()).toBe('RRRR');
        });

    });

    describe('Five hours row', function(){

        it('at 00:00:00 should have all the lamps to be OOOO', () => {
            let time = '00:00:00';
            const [h, m, s] = time.split(":");
            const props = {
                hours: h
            }
            
            hours = setup(props);
            
            expect(hours.topHours()).toBe('OOOO');
        });

        it('at 23:59:59 should have all the lamps to be RRRR', () => {
            let time = '23:59:59';
            const [h, m, s] = time.split(":");
            const props = {
                hours: h
            }
            
            hours = setup(props);
            
            expect(hours.topHours()).toBe('RRRR');
        });

        it('at 02:04:00 should have all the lamps to be OOOO', () => {
            let time = '02:04:00';
            const [h, m, s] = time.split(":");
            const props = {
                hours: h
            }
            
            hours = setup(props);
            
            expect(hours.topHours()).toBe('OOOO');
        });

        it('at 08:23:00 should have all the lamps to be ROOO', () => {
            let time = '08:23:00';
            const [h, m, s] = time.split(":");
            const props = {
                hours: h
            }
            
            hours = setup(props);
            
            expect(hours.topHours()).toBe('ROOO');
        });

        it('at 16:35:00 should have all the lamps to be RRRO', () => {
            let time = '16:35:00';
            const [h, m, s] = time.split(":");
            const props = {
                hours: h
            }
            
            hours = setup(props);
            
            expect(hours.topHours()).toBe('RRRO');
        });

    });

});