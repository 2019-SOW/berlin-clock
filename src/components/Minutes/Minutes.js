import React from 'react';
import constants from '../../utils/constants';

class Minutes extends React.Component {

    bottomMinutes() {
        return this.getOnOffLamps(constants.TOTAL_BOTTOM_MINUTES_LAMP, this.props.minutes % 5);
    }

    getOnOffLamps = (totalLamps, lampsOn) => {
        let row = "";
        let lampsOff = totalLamps - lampsOn;

        for (let i = 0; i < lampsOn; i++) {
            row += constants.YELLOW_LAMP;
        }

        for (let i = 0; i < lampsOff; i++) {
          row += constants.LAMP_OFF;
        }
        
        return row;
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }

}

export default Minutes;