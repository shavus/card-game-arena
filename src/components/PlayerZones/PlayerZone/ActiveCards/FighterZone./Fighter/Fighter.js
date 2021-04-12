import classes from "./Fighter.module.css"

const fighter = (props) => (
    <div key={props.key} className={classes.Fighter}>
        {props.children}
    </div>
)

export default fighter;