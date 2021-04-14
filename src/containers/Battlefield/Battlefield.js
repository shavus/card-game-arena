import { Component } from "react";

import BattleDetails from "../../components/BattleDetails/BattleDetails";
import PlayerZones from '../../components/PlayerZones/PlayerZones';
import BattlefieldContext from '../../context/battlefield-context';
import BatleDetailsContext from '../../context/battle-detais-context';

import classes from './Battlefield.module.css';

class Battlefield extends Component {

    state = {
        opponentUsername: 'Baddie McBadderson',
        battlefield: {
            oppoDrawPile: 43,
            oppoFighter1: {
                name: 'oppoFighter1',
                def: 5,
                defMod: -2,
                atk: 4,
                atkMod: 1,
                cost: 7,
                renown: 4,
                skills: ['lifelink', 'deathtouch', 'menace'],
            },
            oppoFighter2: null,
            oppoFighter3: null,
            oppoFighter4: null,
            oppoFighter5: null,
            oppoHandSize: 4,
            playerDrawPile: 42,
            playerFighter1: null,
            playerFighter2: {
                name: 'playerFighter2',
                def: 5,
                defMod: 0,
                atk: 4,
                atkMod: -1,
                cost: 7,
                renown: 4,
                skills: ['lifelink', 'deathtouch', 'menace'],},
            playerFighter3: null,
            playerFighter4: null,
            playerFighter5: null,
        },
        battleDetails: {
            isPlayerTurn: true,       //player is currently taking their turn
            isPlayerAtk: true,      //player is attacker this round
            oppoEnergy: 3,
            oppoHealth: 12,
            oppoPurchasedEnergy: 1,
            playerEnergy: 1,
            playerHealth: 4,
            playerPurchasedEnergy: 0,
            turn: 3,
        }
    }

    render() {
        return (
            <div className={classes.Battlefield}>

                <BattlefieldContext.Provider
                    value={{
                        ...this.state.battlefield,
                    }}
                >
                    <PlayerZones />
                </BattlefieldContext.Provider>
                <BatleDetailsContext.Provider
                    value={{
                        ...this.state.battleDetails,
                        opponentUsername: this.state.opponentUsername,
                    }}
                >
                    <BattleDetails />
                </BatleDetailsContext.Provider>
            </div>
        );
    }
}

export default Battlefield;