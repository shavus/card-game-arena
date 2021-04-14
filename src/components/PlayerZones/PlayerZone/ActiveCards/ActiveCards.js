import FighterZone from './FighterZone/FighterZone';
import Hand from './Hand/Hand';

import classes from './ActiveCards.module.css';

const activeCards = (props) => {
    let activeCards = (
        <div className={classes.ActiveCards}>
            <Hand isPlayer={props.isPlayer}/>
            <FighterZone isPlayer={props.isPlayer}/>
        </div>
    );
    if (props.isPlayer) {
        activeCards = (
            <div className={classes.ActiveCards}>
                <FighterZone isPlayer={props.isPlayer}/>
                <Hand isPlayer={props.isPlayer}/>
            </div>
        );
    }

    return activeCards;
};

export default activeCards;