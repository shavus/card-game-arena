import playerZone from '../PlayerZone';
import DiscardCards from './DiscardCards/DiscardCards';
import DrawCards from './DrawCards/DrawCards';

import classes from './InactiveCards.module.css';

const inactiveCards = (props) => {
    let playerView = (
        <div className={classes.InactiveCards}>
            <DiscardCards />
            <DrawCards />
        </div>
    );

    if (!props.isPlayer) {
        playerView = (
            <div className={classes.InactiveCards}>
                <DrawCards />
                <DiscardCards />
            </div>
        );
    }

    return playerView;
}

export default inactiveCards;