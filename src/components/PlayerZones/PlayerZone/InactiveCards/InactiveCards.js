import DiscardCards from './DiscardCards/DiscardCards';
import DrawCards from './DrawCards/DrawCards';

import classes from './InactiveCards.module.css';

const inactiveCards = (props) => {
    let playerView = (
        <div className={classes.InactiveCards}>
            <DiscardCards isPlayer={props.isPlayer}/>
            <DrawCards isPlayer={props.isPlayer} />
        </div>
    );

    if (!props.isPlayer) {
        playerView = (
            <div className={classes.InactiveCards}>
                <DrawCards isPlayer={props.isPlayer} />
                <DiscardCards isPlayer={props.isPlayer} />
            </div>
        );
    }

    return playerView;
}

export default inactiveCards;