import classes from './NavTile.module.css';

const navTile = (props) => {
    const tileClasses = props.active ? [classes.NavTile, classes.Active].join(' ') : classes.NavTile;
    return (
        <div className={tileClasses} onClick={props.clicked}>
            <div className={classes.NavTileSection} style={{ display: 'flex', flex: 7, flexDirection: 'column' }}>
                <h2 style={{ flex: 2 }}>{props.title}</h2>
                <p style={{ flex: 1 }}>{props.description}</p>
            </div>
            <div className={classes.NavTileSection} style={{ display: 'flex', flex: 3 }}>
                <img src={props.image} />
            </div>
        </div>
    );
}

export default navTile;