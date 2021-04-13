import Shield from '../../../../UI/Shield/Shield';
import Sword from '../../../../UI/Sword/Sword';

import classes from './PlayerStatus.module.css';

const playerStatus = (props) => {
    let status = <Shield />;

    if (props.playerAtk)
    {
        status = <Sword />;
    }
    return (
        <div className={classes.PlayerStatus}>
            <div className={classes.Health}>{props.curHealth}</div>
            <div className={classes.Status}>{ status }</div>
        </div>
    );
}

export default playerStatus;