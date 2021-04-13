import EnergyRow from './EnergyRow/EnergyRow';

import classes from "./PlayerEnergy.module.css";

const playerEnergy = (props) => (
    <div className={classes.PlayerEnergy}>
        <EnergyRow isEnemy={props.isEnemy} rowId={6} key={6} num={6} />
        <EnergyRow isEnemy={props.isEnemy} rowId={5} key={5} num={5} />
        <EnergyRow isEnemy={props.isEnemy} rowId={4} key={4} num={4} />
        <EnergyRow isEnemy={props.isEnemy} rowId={3} key={3} num={3} />
        <EnergyRow isEnemy={props.isEnemy} rowId={2} key={2} num={2} />
        <EnergyRow isEnemy={props.isEnemy} rowId={1} key={1} num={1} />
    </div>
);

export default playerEnergy;