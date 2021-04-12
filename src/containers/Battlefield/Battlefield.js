import { Component } from "react";

import BattleDetails from "../../components/BattleDetails/BattleDetails";
import PlayerZones from '../../components/PlayerZones/PlayerZones';

import classes from './Battlefield.module.css';

class Battlefield extends Component {
    
    render() {
        return (
            <div className={classes.Battlefield}>
                <PlayerZones />
                <BattleDetails />
            </div>
        );
    }
}

export default Battlefield;