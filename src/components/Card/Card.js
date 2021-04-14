import classes from './Card.module.css';

const card = (props) => {
    let atkClasses = [classes.CardDefense];
    if (props.card.atkMod > 0)
    {
        atkClasses.push(classes.CardBuffed);
    } else if (props.card.atkMod < 0) {
        atkClasses.push(classes.CardDamaged);
    }
    let defClasses = [classes.CardDefense];
    if (props.card.defMod > 0)
    {
        defClasses.push(classes.CardBuffed);
    } else if (props.card.defMod < 0) {
        defClasses.push(classes.CardDamaged);
    }
    return (
        <div className={classes.Card}>
            <div className={classes.CardName}>{props.card.name}</div>
            <div className={classes.CardHeader}>
                <div className={classes.CardCost}><span>{props.card.cost}</span></div>
                <div className={classes.CardStatus}></div>
                <div className={classes.CardRenown}><span>{props.card.renown}</span></div>
            </div>
            <div className={classes.CardBody}>{props.card.skills ? props.card.skills.join(', ') : null}</div>
            <div className={classes.CardFooter}>
                <div className={atkClasses.join(' ')}><span>{props.card.atk}</span></div>
                <div className={defClasses.join(' ')}><span>{props.card.def + props.card.defMod}</span></div>
            </div>
        </div>
    )
};

export default card;