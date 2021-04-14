import Shield from '../../../../ui/Shield/Shield';
import Sword from '../../../../ui/Sword/Sword';

import classes from './PlayerStatus.module.css';

const playerStatus = (props) => {
    let status = <Shield active={props.isTurn}/>;

    if (props.playerAtk)
    {
        status = <Sword active={props.isTurn}/>;
    }
    
    let playerStatusClasses = [classes.PlayerStatus];
    if (props.isTurn)
    {
        playerStatusClasses.push(classes.Active);
    }
    return (
        <div className={playerStatusClasses.join(' ')}>
            <div className={classes.Health}>{props.curHealth}</div>
            <div className={classes.Status}>{ status }</div>
        </div>
    );
}

export default playerStatus;