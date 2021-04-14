import BattlefieldContext from '../../../../../context/battlefield-context';
import cardBack from '../../../../../assets/images/card-back.png'; 
import classes from './DrawCards.module.css';

const drawCards = (props) => (
    <div className={classes.DrawCards}>
        <div className={classes.ImageHolder}>
            <img src={cardBack}></img>
            <BattlefieldContext.Consumer>{(context) => <p>{props.isPlayer ? context.playerDrawPile : context.oppoDrawPile}</p>}</BattlefieldContext.Consumer>
            
        </div>
    </div>
)

export default drawCards;