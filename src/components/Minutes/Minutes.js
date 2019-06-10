import React from 'react';
import constants from '../../utils/constants';

class Minutes extends React.Component {

    bottomMinutes() {
        return this.getOnOffLamps(constants.TOTAL_BOTTOM_MINUTES_LAMP);
    }

    getOnOffLamps = (totalLamps) => {
        let row = "";
    
        for (let i = 0; i < totalLamps; i++) {
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