import ActiveCards from './ActiveCards/ActiveCards';
import InactiveCards from './InactiveCards/InactiveCards';

import classes from './PlayerZone.module.css';

const playerZone = (props) => (
    <div className={classes.PlayerZone}>
        <ActiveCards isPlayer={props.isPlayer} />
        <InactiveCards isPlayer={props.isPlayer}/>
    </div>
)

export default playerZone;