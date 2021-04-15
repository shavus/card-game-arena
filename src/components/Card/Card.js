import classes from './Card.module.css';

const card = (props) => {
    let atkClasses = getAttackClasses(props);
    let defClasses = getDefenseClasses(props);

    return (
        <div className={classes.Card}>
            <div className={classes.CardName}>{props.card.name}</div>
            <div className={classes.CardHeader}>
                <div className={classes.CardCost}><span>{props.card.cost}</span></div>
                <div className={classes.CardStatus}>{props.card.status ? props.card.status.join(', ') : null}</div>
                <div className={classes.CardRenown}><span>{props.card.renown}</span></div>
            </div>
            <div className={classes.CardBody}>{props.card.skills ? props.card.skills.join(', ') : null}</div>
            <div className={classes.CardFooter}>
                <div className={atkClasses.join(' ')}><span>{props.card.atk + props.card.atkMod}</span></div>
                <div className={defClasses.join(' ')}><span>{props.card.def + props.card.defMod}</span></div>
            </div>
        </div>
    )
};

/**
 * Gets the html classes for the attack field.
 */
const getAttackClasses = (props) => {
    let atkClasses = [classes.CardAttack];

    if (props.card.atkMod > 0) {
        atkClasses.push(classes.CardBuffed);
    } else if (props.card.atkMod < 0) {
        atkClasses.push(classes.CardDamaged);
    }

    return atkClasses;
}

/**
 * Gets the html classes for the defense field.
 */
const getDefenseClasses = (props) => {
    let defClasses = [classes.CardDefense];

    if (props.card.defMod > 0) {
        defClasses.push(classes.CardBuffed);
    } else if (props.card.defMod < 0) {
        defClasses.push(classes.CardDamaged);
    }

    return defClasses;
}

export default card;