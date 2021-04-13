import BatleDetailsContext from '../../../../context/battle-detais-context'

import classes from './EnergyRow.module.css';

const energyRow = (props) => (
    <BatleDetailsContext.Consumer>
        {(context) => {
            return createEnergyRow(context, props);
        }}
    </BatleDetailsContext.Consumer>
);

const createEnergyRow = (context, props) => {
    let currentEnergy = context.playerEnergy;
    let currentPurchasedEnergy = context.playerPurchasedEnergy;
    if (props.isEnemy)
    {
        currentEnergy = context.oppoEnergy;
        currentPurchasedEnergy = context.oppoPurchasedEnergy;
    }

    let upkeepClasses = [classes.Energy];
    upkeepClasses = upkeepClasses.concat(getClasses(context.turn, context.atkPlayerPhase, currentEnergy, props.rowId, false))

    let purchasedClasses = [classes.Energy];
    if (props.rowId === 6) {
        purchasedClasses.push(classes.Total);
    } 
    purchasedClasses = purchasedClasses.concat(getClasses(context.turn, context.atkPlayerPhase, currentPurchasedEnergy, props.rowId, true))

    return (
        <div className={classes.EnergyRow}>
            <div className={upkeepClasses.join(' ')}></div>
            {props.rowId === 6 ? 
                <div className={purchasedClasses.join(' ')}>{currentEnergy + currentPurchasedEnergy}</div> :
                <div className={purchasedClasses.join(' ')}></div>}
        </div>
    );
};

const getClasses = (turn, atkPlayerPhase, currentEnergy, rowId, isPurchased) => {
    let energyClasses = [];
    if (rowId > turn || (atkPlayerPhase && rowId === turn && isPurchased)) {
        energyClasses.push(classes.Locked);
    } else {
        if (rowId <= currentEnergy)
        {
            energyClasses.push(classes.Available);
        } else {
            energyClasses.push(classes.Spent);
        }
    }

    return energyClasses;
}

export default energyRow;