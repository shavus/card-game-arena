import { Component, Fragment } from "react";

import PlayerZones from './PlayerZones/PlayerZones'

import classes from './Battlefield.module.css';

class Battlefield extends Component {
    

    render() {
        return (
            <div className={classes.Battlefield}>
                <div className={classes.Combat}>
                    <PlayerZones />
                </div>
                <div className={classes.Details}>
                    battle details
                </div>
            </div>
        );
    }
}

export default Battlefield;