import { Component } from "react";

import BattleDetails from "../../components/BattleDetails/BattleDetails";
import PlayerZones from '../../components/PlayerZones/PlayerZones';
import BatleDetailsContext from '../../context/battle-detais-context';

import classes from './Battlefield.module.css';

class Battlefield extends Component {

    state = {
        opponentUsername: 'Baddie McBadderson',
        battleDetails: {
            playerTurn: true,       //player is current taking their turn
            isPlayerAtk: true,      //player is attacker this round
            oppoEnergy: 3,
            oppoHealth: 12,
            oppoPurchasedEnergy: 1,
            playerEnergy: 1,
            playerHealth: 18,
            playerPurchasedEnergy: 0,
            turn: 3,
        }
    }

    render() {
        return (
            <div className={classes.Battlefield}>
                <BatleDetailsContext.Provider
                    value={{
                        ...this.state.battleDetails,
                        opponentUsername: this.state.opponentUsername,
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