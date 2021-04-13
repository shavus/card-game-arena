import PlayerEnergy from './PlayerEnergy/PlayerEnergy';
import TurnTracker from './TurnTracker/TurnTracker';
import BatleDetailsContext from '.././../context/battle-detais-context';

import classes from './BattleDetails.module.css';

const battleDetails = (props) => (
    <div className={classes.BattleDetails}>
        <BatleDetailsContext.Consumer>
            {(context) => {
                return <div className={classes.PlayerName}>{context.opponentUsername}</div>
            }}
        </BatleDetailsContext.Consumer>
        <PlayerEnergy isEnemy />
        <TurnTracker />
        <PlayerEnergy />
    </div>
);

export default battleDetails;