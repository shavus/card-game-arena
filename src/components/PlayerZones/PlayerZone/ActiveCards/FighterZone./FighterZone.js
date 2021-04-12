import Fighter from './Fighter/Fighter';

import classes from './FighterZone.module.css';

const fighterZone = (props) => (
    <div className={classes.FighterZone}>
        <Fighter key={1} >Fighter 1</Fighter>
        <Fighter key={2} >Fighter 2</Fighter>
        <Fighter key={3} >Fighter 3</Fighter>
        <Fighter key={4} >Fighter 4</Fighter>
        <Fighter key={5} >Fighter 5</Fighter>
    </div>
);

export default fighterZone;