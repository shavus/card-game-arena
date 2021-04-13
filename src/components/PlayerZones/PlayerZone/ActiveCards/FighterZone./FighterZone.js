import Fighter from './Fighter/Fighter';

import classes from './FighterZone.module.css';

const fighterZone = (props) => (
    <div className={classes.FighterZone}>
        <Fighter id={1} key={1} >Fighter 1</Fighter>
        <Fighter id={2} key={2} >Fighter 2</Fighter>
        <Fighter id={3} key={3} >Fighter 3</Fighter>
        <Fighter id={4} key={4} >Fighter 4</Fighter>
        <Fighter id={5} key={5} >Fighter 5</Fighter>
    </div>
);

export default fighterZone;