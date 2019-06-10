import React from 'react';
import constants from '../../utils/constants';
import { modulo5, getOnOffLamps } from '../../utils/clockUtils';

class Hours extends React.Component {

    bottomHours() {
        return getOnOffLamps(constants.TOTAL_BOTTOM_HOURS_LAMP, modulo5(this.props.hours)).replace(/Y/g, 'R');
    }

    formLampBlocks(row) {
        if(row){
            let lamps = row.split("");
            const rows = lamps.map((lamp, index) => {
                return <div key={index} className={"light " + (lamp === constants.RED_LAMP ? constants.LAMP_ON_CLASS : constants.LAMP_OFF_CLASS)}></div>;
            });
            return rows;
        } 
    }

    render() {
        return (
            <React.Fragment>
                <div id="oneHourRow">{this.formLampBlocks(this.bottomHours())}</div>
            </React.Fragment>
        );
    }

}

export default Hours;