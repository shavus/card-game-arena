import FighterZone from './FighterZone./FighterZone';
import Hand from './Hand/Hand';

import classes from './ActiveCards.module.css';

const activeCards = (props) => {
    let activeCards = (
        <div className={classes.ActiveCards}>
            <Hand />
            <FighterZone />
        </div>
    );
    if (props.isPlayer) {
        activeCards = (
            <div className={classes.ActiveCards}>
                <FighterZone />
                <Hand />
            </div>
        );
    }

    return activeCards;
};

export default activeCards;