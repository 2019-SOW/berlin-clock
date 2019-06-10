import React from 'react';
import constants from '../../utils/constants';

class Minutes extends React.Component {

    bottomMinutes() {
        return this.getOnOffLamps(constants.TOTAL_BOTTOM_MINUTES_LAMP, this.props.minutes % 5);
    }

    topMinutes() {
        return this.getOnOffLamps(constants.TOTAL_TOP_MINUTES_LAMP, Math.floor(this.props.minutes / 5));
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