import PlayerEnergy from './PlayerEnergy/PlayerEnergy';
import TurnTracker from './TurnTracker/TurnTracker';

import classes from './BattleDetails.module.css';

const battleDetails = (props) => (
    <div className={classes.BattleDetails}>
        <PlayerEnergy />
        <TurnTracker />
        <PlayerEnergy />
        
    </div>
);

export default battleDetails;