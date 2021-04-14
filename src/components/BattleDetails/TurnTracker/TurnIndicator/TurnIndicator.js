import classes from './TurnIndicator.module.css';
import downChevron from '../../../../assets/images/double-chevron-down.png';
import upChevron from '../../../../assets/images/double-chevron-up.png';

const turnIndicator = (props) => {
    let turnPointer = <img src={downChevron} />;
    if (!props.playerTurn) {
        turnPointer = <img src={upChevron} />;
    }
    return (
        <div className={classes.TurnIndicator}>
            <button className={classes.Attack} disabled={!props.playerTurn}>Attack</button>
            <div className={classes.CurrentTurnIndicator}>{turnPointer}</div>
            <div className={classes.TurnCount}>{props.turn}</div>
        </div>
    )
}

export default turnIndicator;