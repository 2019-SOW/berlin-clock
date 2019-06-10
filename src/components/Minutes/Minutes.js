import React from 'react';
import constants from '../../utils/constants';
import { modulo5, divide5, getOnOffLamps } from '../../utils/clockUtils';

class Minutes extends React.Component {

    bottomMinutes() {
        return getOnOffLamps(constants.TOTAL_BOTTOM_MINUTES_LAMP, modulo5(this.props.minutes));
    }

    topMinutes() {
        return getOnOffLamps(constants.TOTAL_TOP_MINUTES_LAMP, Math.floor(divide5(this.props.minutes))).replace(/YYY/g, 'YYR');
    }

    formLampBlocks(row){
        if(row){
            let lamps = row.split("");
            const lampBlocks = lamps.map((lamp, index) => {
                return <div key={index} className={"light " + (lamp === constants.YELLOW_LAMP ? constants.LAMP_ON_CLASS : constants.LAMP_OFF_CLASS)}></div>;
            });
            return lampBlocks;
        } 
    }

    render() {
        return (
            <React.Fragment>
                <div id="fiveMinuteRow">{this.formLampBlocks(this.topMinutes())}</div>
                <div id="oneMinuteRow">{this.formLampBlocks(this.bottomMinutes())}</div>
            </React.Fragment>
        );
    }

}

export default Minutes;