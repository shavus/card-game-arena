import { Component } from "react";

import BattleDetails from "../../components/BattleDetails/BattleDetails";
import PlayerZones from '../../components/PlayerZones/PlayerZones';
import BatleDetailsContext from '../../context/battle-detais-context';

import classes from './Battlefield.module.css';

class Battlefield extends Component {

    state = {
        atkPlayerPhase: true,
        oppoEnergy: 3,
        oppoPurchasedEnergy: 1,
        opponentUsername: 'Baddie McBadderson',
        playerEnergy: 1,
        playerPurchasedEnergy: 0,
        turn: 3,
    }

    render() {
        return (
            <div className={classes.Battlefield}>
                <BatleDetailsContext.Provider
                    value={{
                        atkPlayerPhase: this.state.atkPlayerPhase,
                        oppoEnergy: this.state.oppoEnergy,
                        oppoPurchasedEnergy: this.state.oppoPurchasedEnergy,
                        opponentUsername: this.state.opponentUsername,
                        playerEnergy: this.state.playerEnergy,
                        playerPurchasedEnergy: this.state.playerPurchasedEnergy,
                        turn: this.state.turn,
                    }}
                >
                    <PlayerZones />
                    <BattleDetails />
                </BatleDetailsContext.Provider>
            </div>
        );
    }
}

export default Battlefield;