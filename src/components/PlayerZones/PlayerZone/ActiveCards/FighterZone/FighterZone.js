import Card from '../../../../../components/Card/Card';
import Fighter from './Fighter/Fighter';
import BattlefiendContext from '../../../../../context/battlefield-context';

import classes from './FighterZone.module.css';

const fighterZone = (props) => (
    <BattlefiendContext.Consumer>{(context) => (
        <div className={classes.FighterZone}>
            <Fighter id={1} key={1}>
                {(props.isPlayer && context.playerFighter1) || (!props.isPlayer && context.oppoFighter1) ?  
                    <Card card={props.isPlayer ? { ...context.playerFighter1 } : { ...context.oppoFighter1 }} /> : null}
            </Fighter>
            <Fighter id={2} key={2}>
                {(props.isPlayer && context.playerFighter2) || (!props.isPlayer && context.oppoFighter2) ?  
                    <Card card={props.isPlayer ? { ...context.playerFighter2 } : { ...context.oppoFighter2 }} /> : null}
            </Fighter>
            <Fighter id={3} key={3}>
                {(props.isPlayer && context.playerFighter3) || (!props.isPlayer && context.oppoFighter3) ?  
                    <Card card={props.isPlayer ? { ...context.playerFighter3 } : { ...context.oppoFighter3 }} /> : null}
            </Fighter>
            <Fighter id={4} key={4}>
                {(props.isPlayer && context.playerFighter4) || (!props.isPlayer && context.oppoFighter4) ?  
                    <Card card={props.isPlayer ? { ...context.playerFighter4 } : { ...context.oppoFighter4 }} /> : null}
            </Fighter>
            <Fighter id={5} key={5}>
                {(props.isPlayer && context.playerFighter5) || (!props.isPlayer && context.oppoFighter5) ?  
                    <Card card={props.isPlayer ? { ...context.playerFighter5 } : { ...context.oppoFighter5 }} /> : null}
            </Fighter>
        </div>
    )}
    </BattlefiendContext.Consumer>
);

export default fighterZone;