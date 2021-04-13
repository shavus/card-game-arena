import BatleDetailsContext from '../../../context/battle-detais-context';
import PlayerStatus from './PlayerStatus/PlayerStatus';

import classes from './TurnTracker.module.css';

const turnTracker = (props) => (
    <BatleDetailsContext.Consumer>
        {(context) => (
            <div className={classes.TurnTracker}>
                <PlayerStatus curHealth={context.oppoHealth} playerAtk={!context.isPlayerAtk}/>
                <div className={classes.TurnCounter}>{context.turn}</div>
                <PlayerStatus curHealth={context.playerHealth} playerAtk={context.isPlayerAtk}/>
            </div>
        )}
    </BatleDetailsContext.Consumer>
);

export default turnTracker;