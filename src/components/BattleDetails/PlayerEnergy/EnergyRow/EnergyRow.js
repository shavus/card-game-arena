import BatleDetailsContext from '../../../../context/battle-detais-context';
import lock from '../../../../assets/images/lock.png';

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
    if (props.isEnemy) {
        currentEnergy = context.oppoEnergy;
        currentPurchasedEnergy = context.oppoPurchasedEnergy;
    }

    let upkeepClasses = [classes.EnergyBox];
    upkeepClasses = upkeepClasses.concat(
        getClasses(context.turn, ((context.isPlayerTurn && !context.isPlayerAtk) || (!context.isPlayerTurn && context.isPlayerAtk)), currentEnergy, props.rowId, false)
    );

    let purchasedClasses = [classes.EnergyBox];
    if (props.rowId === 6) {
        purchasedClasses.push(classes.Total);
    }
    purchasedClasses = purchasedClasses.concat(
        getClasses(context.turn, ((context.isPlayerTurn && !context.isPlayerAtk) || (!context.isPlayerTurn && context.isPlayerAtk)), currentPurchasedEnergy, props.rowId, true)
        )

    return (
        <div className={classes.EnergyRow}>
            <div className={upkeepClasses.join(' ')}>{upkeepClasses.includes(classes.Locked) ? <img src={lock} title={`Will unlock on attackers turn ${props.rowId}`}/> : null}</div>
            {props.rowId === 6 ?
                <div className={purchasedClasses.join(' ')}>{currentEnergy + currentPurchasedEnergy}</div> :
                <div className={purchasedClasses.join(' ')}>{purchasedClasses.includes(classes.Locked) ? <img src={lock} title={`Will unlock on defenders turn ${props.rowId}`}/> : null}</div>}
        </div>
    );
};

const getClasses = (turn, defendersTurn, currentEnergy, rowId, isPurchased) => {
    let energyClasses = [];
    if (rowId > turn || (!defendersTurn && rowId === turn && isPurchased)) {
        energyClasses.push(classes.Locked);
    } else {
        if (rowId <= currentEnergy) {
            energyClasses.push(classes.Available);
            energyClasses.push(classes.Energy);
        } else {
            energyClasses.push(classes.Spent);
        }
    }

    return energyClasses;
}

export default energyRow;