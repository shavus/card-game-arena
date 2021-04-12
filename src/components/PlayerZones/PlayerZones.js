import PlayerZone from './PlayerZone/PlayerZone';

import classes from './PlayerZones.module.css';

const playerZones = (props) => {
    return (
        <div className={classes.PlayerZones}>
            <PlayerZone isPlayer={false} playerName='Enemy Player' />
            <PlayerZone isPlayer={true} playerName='User Player' />
        </div>
    );
}

export default playerZones;