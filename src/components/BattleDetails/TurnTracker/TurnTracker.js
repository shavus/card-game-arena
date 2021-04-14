import BatleDetailsContext from '../../../context/battle-detais-context';
import PlayerStatus from './PlayerStatus/PlayerStatus';
import TurnIndicator from './TurnIndicator/TurnIndicator';

import classes from './TurnTracker.module.css';

const turnTracker = (props) => (
    <BatleDetailsContext.Consumer>
        {(context) => (
            <div className={classes.TurnTracker}>
                <PlayerStatus curHealth={context.oppoHealth} playerAtk={!context.isPlayerAtk} isTurn={!context.isPlayerTurn}/>
                <TurnIndicator playerTurn={context.isPlayerTurn} turn={context.turn} />
                <PlayerStatus curHealth={context.playerHealth} playerAtk={context.isPlayerAtk} isTurn={context.isPlayerTurn}/>
            </div>
        )}
    </BatleDetailsContext.Consumer>
);

export default turnTracker;