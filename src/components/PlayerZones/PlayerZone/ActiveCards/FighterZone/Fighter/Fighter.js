import classes from "./Fighter.module.css"

//props.children will potentially hold a card
const fighter = (props) => (
    <div key={props.fighterId} className={classes.Fighter}>
        {props.children}
    </div>
)

export default fighter;